import React, { Component } from 'react';
import { Chart, Geom, Coord, Shape } from 'bizcharts';
import DataSet from '@antv/data-set';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import classNames from 'cla