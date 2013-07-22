/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

var learningRate = 0.15;

function new_neural_network(num_input, num_hidden, num_output) {
  var i, h, o, j, data;
  data = {
    numInputs: num_input,
    numHidden: num_hidden,
    numOutputs: num_output,
    inputs: [],  // num_input
    hidden: [],  // num_hidden
    outputs: [], // num_output
    w1: [],      // num_input  * num_hidden
    w2: [],      // num_hidden * num_output
    output_errors: [], // num_output
    hidden_errors: [], // num_hidden),
    input_training_examples: [],
    output_training_examples: []
  };
  for (i = 0; i < num_input; i += 1) {
    data.w1[i] = []; // num_hidden
    data.inputs[i] = 0;
  }
  for (i = 0; i < num_hidden; i += 1) {
    data.w2[i] = []; // num_output);
  }
  for (i = 0; i < num_input; i += 1) {
    for (h = 0; h < num_hidden; h += 1) {
      data.w1[i][h] = 0.1 * (Math.random() - 0.5);
    }
  }
  for (h = 0; h < num_hidden; h += 1) {
    for (o = 0; o < num_output; o += 1) {
      data.w2[h][o] = 0.1 * (Math.random() - 0.5);
    }
  }
  return data;
}

function add_training_example(nn, inputs, outputs) {
  nn.input_training_examples.push(inputs);
  nn.output_training_examples.push(outputs);
}

function sigmoid(x) {
  return (1.0 / (1.0 + Math.exp(-x)));
}

function sigmoidP(x) {
  var z = sigmoid(x);
  return (z * (1.0 - z));
}

function forward_pass(nn) {
  var i, h, o;
  for (h = 0; h < nn.numHidden; h += 1) {
    nn.hidden[h] = 0;
  }
  for (i = 0; i < nn.numInputs; i += 1) {
    for (h = 0; h < nn.numHidden; h += 1) {
      nn.hidden[h] += nn.inputs[i] * nn.w1[i][h];
    }
  }
  for (o = 0; o < nn.numOutputs; o += 1) {
    nn.outputs[o] = 0;
  }
  for (h = 0; h < nn.numHidden; h += 1) {
    for (o = 0; o < nn.numOutputs; o += 1) {
      nn.outputs[o] += sigmoid(nn.hidden[h]) * nn.w2[h][o];
    }
  }
  for (o = 0; o < nn.numOutput; o += 1) {
    nn.outputs[o] = sigmoid(nn.outputs[o]);
  }
}

function train(nn) {
  var i, h, o, ncase, error = 0, outs, num_cases;
  num_cases = nn.input_training_examples.length;
  for (ncase = 0; ncase < num_cases; ncase += 1) {
    // zero out the errors: at the hidden and output layers:
    for (h = 0; h < nn.numHidden; h += 1) {
      nn.hidden_errors[h] = 0;
    }
    for (o = 0; o < nn.numOutputs; o += 1) {
      nn.output_errors[o] = 0;
    }
    for (i = 0; i < nn.numInputs; i += 1) {
      nn.inputs[i] = nn.input_training_examples[ncase][i];
    }
    outs = nn.output_training_examples[ncase];
    forward_pass(nn);
    for (o = 0; o < nn.numOutputs; o += 1) {
      nn.output_errors[o] = (outs[o] - nn.outputs[o]) * sigmoidP(nn.outputs[o]);
    }
    for (h = 0; h < nn.numHidden; h += 1) {
      nn.hidden_errors[h] = 0.0;
      for (o = 0; o < nn.numOutputs; o += 1) {
        nn.hidden_errors[h] += nn.output_errors[o] * nn.w2[h][o];
      }
    }
    for (h = 0; h < nn.numHidden; h += 1) {
      nn.hidden_errors[h] =
        nn.hidden_errors[h] * sigmoidP(nn.hidden[h]);
    }
    // update the hidden to output weights:
    for (o = 0; o < nn.numOutputs; o += 1) {
      for (h = 0; h < nn.numHidden; h += 1) {
        nn.w2[h][o] +=
          learningRate * nn.output_errors[o] * nn.hidden[h];
      }
    }
    // update the input to hidden weights:
    for (h = 0; h < nn.numHidden; h += 1) {
      for (i = 0; i < nn.numInputs; i += 1) {
        nn.w1[i][h] +=
          learningRate * nn.hidden_errors[h] * nn.inputs[i];
      }
    }
    for (o = 0; o < nn.numOutputs; o += 1) {
      error += Math.abs(outs[o] - nn.outputs[o]);
    }
  }
  return error;
}

function recall(nn, inputs) {
  var i, num_inputs = nn.inputs.length;
  for (i = 0; i < num_inputs; i += 1) {
    nn.inputs[i] = inputs[i];
  }
  forward_pass(nn);
  return nn.outputs;
}

function test_nn() {
  var error, iter, test_data = new_neural_network(3, 3, 3);
  add_training_example(test_data, [0.1, 0.1, 0.9], [0.9, 0.1, 0.1]);
  add_training_example(test_data, [0.1, 0.9, 0.1], [0.1, 0.1, 0.9]);
  add_training_example(test_data, [0.9, 0.1, 0.1], [0.1, 0.9, 0.1]);
  console.log(test_data);
  console.log(test_data);
  for (iter = 0; iter < 1000; iter += 1) {
    console.log(train(test_data));
  }
  console.log(recall(test_data, [0.08, 0.2, 0.88]));
  console.log(recall(test_data, [0.93, 0.2, 0.11]));
  console.log(recall(test_data, [0.11, 0.9, 0.06]));
}

// test everything:
test_nn();