'use client';

import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const PredictionForm = () => {
  const [model, setModel] = useState(null);
  const [input, setInput] = useState('');
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadGraphModel('/path/to/tfjs_model/model.json');
        setModel(loadedModel);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };
    loadModel();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (model) {
      try {
        const inputData = input.split(',').map(Number);
        const inputTensor = tf.tensor([inputData]);
        const outputTensor = model.predict(inputTensor);
        const prediction = outputTensor.dataSync();
        setPrediction(prediction);
      } catch (error) {
        console.error('Error during prediction:', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Enter comma-separated values" 
        />
        <button type="submit">Predict</button>
      </form>
      {prediction && <div>Prediction: {prediction.join(', ')}</div>}
    </div>
  );
};

export default PredictionForm;
