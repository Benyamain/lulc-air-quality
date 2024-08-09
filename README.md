# Using Machine Learning and Google Earth Engine to Understand Land Use and Land Cover Classifications and NO<sub>2</sub> Levels in California 🌬️
### About 🪞

This repository contains code implementation of the paper, "[Using Machine Learning and Google Earth Engine to Understand Land Use and Land Cover Classifications and NO<sub>2</sub> Levels in California](https://ieeexplore.ieee.org/abstract/document/10609851)."
### Note 📓
The codebase currently only analyzes California as the region of interest.

### Dependencies ⛓️

The code is implemented and tested on Jupyter Notebook (requires Anaconda installation). The following packages are used:

- `ipykernel==6.25.0`
- `scikit-learn==1.3.0`
- `matplotlib==3.7.2`
- `ipython==8.15.0`
- `jupyter==1.0.0`
- `numpy==1.24.3`
- `pandas==2.0.3`

The code is tested on `Python 3.11.5`.

### How to Use the Code 💻

The dataset is available in `lulc-air-quality/dataset/california-eleven-month-mol-m2.zip` and the codebase can be found in `lulc-air-quality/codebase/lulc-air-quality.ipynb`.

If you would like to train a model within Jupyter Notebook, run all the cells by finding `Cell` and `Run All`.

Make sure to change the dataset path to where it is stored on your local machine.

### Citation 🤝
```
@INPROCEEDINGS{10609851,
  author={Yacoob, Benyamain and Scheys, Ethan and Oladipo, Eyiara and Price, Andre and Banitaan, Shadi},
  booktitle={2024 IEEE International Conference on Electro Information Technology (EIT)}, 
  title={Using Machine Learning and Google Earth Engine to Understand Land Use and Land Cover Classifications and NO2 Levels in California}, 
  year={2024},
  volume={},
  number={},
  pages={410-417},
  keywords={Earth;Atmospheric modeling;Green products;Urban areas;Predictive models;Air quality;Internet;land use;land cover;air quality;nitrogen dioxide;machine learning;random forest classifier;decision tree classifier},
  doi={10.1109/eIT60633.2024.10609851}}
```
