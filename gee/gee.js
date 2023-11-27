/* The code you need to run to extract the relevant attributes from both the LULC and air quality datasets on Google Earth Engine can be found below */

// Defining the start of our time range of interest
var START = ee.Date('2021-01-01');

//Defining the region of interest
var roi = ee.Geometry({
  'type': 'Polygon',
  'coordinates': [
    [
      [-118.22580057194779, 34.062493521042164],
      [-117.91269022038529, 34.062493521042164],
      [-117.91269022038529, 34.31354553281858],
      [-118.22580057194779, 34.31354553281858],
      [-118.22580057194779, 34.062493521042164],
    ]
  ]
,
  'geodesic': false
})


// Defining visualization parameters for the n02 dataset
var no2_viz = {
  min: 0,
  max: 0.0002,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

// Defining the variables where the data for each month will be added
var monthTimeSpans = [];

// 
var dataCollectedPerWeek = [];
var pollutionDataCollectedPerWeek = [];

// Looping through the 11 month ranges
for (var i = 0; i < 12; i++) {
  
  var week = START.advance(i, 'month');
  monthTimeSpans.push(week);
  
  // Removing initial month-range value, as the array does not have a previous value to be used as a 'before' range point
  if(i !== 0 ){
    var land_use_data = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1')
    .filterDate(monthTimeSpans[i-1], monthTimeSpans[i])
    .filterBounds(roi)
    .mean();
    
    var no2_data = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_NO2')
      .select('NO2_column_number_density')
    .filterDate(monthTimeSpans[i-1], monthTimeSpans[i])
    .filterBounds(roi)
    .mean();
    
    // Map.addLayer(land_use_data, {}, i+"-LULC")
    // Map.addLayer(no2_data, no2_viz, i+"-N02")
    
    //Pushing each image with respect to the dataset used to the proper array
    dataCollectedPerWeek.push(land_use_data);
    pollutionDataCollectedPerWeek.push(no2_data)
  }
}

// Showing time spans
print("Time Spans")
print(monthTimeSpans)

// Sampling the pixel values for each image for a month range and returning an array
var lulc_data = dataCollectedPerWeek.map(function(img){
  return img.sampleRegions({
    collection: roi,
    scale: 100
  })
})

var no2_data = pollutionDataCollectedPerWeek.map(function(img){
  return img.sampleRegions({
    collection: roi, 
    scale: 100
  })
})

// This will show the size of the dataset for 1 month, so multiplied by 11 will give the length of the full data
print(lulc_data[0].size())
print(no2_data[0].size())

// Exporting the data
Export.table.toDrive({
  collection: ee.FeatureCollection(lulc_data).flatten(),
  description:'lulc_data',
  fileFormat: 'csv'
});

Export.table.toDrive({
  collection: ee.FeatureCollection(no2_data).flatten(),
  description:'no2_data',
  fileFormat: 'csv'
});
