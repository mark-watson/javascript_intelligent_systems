### Copyright 2013 Mark Watson. All rights reserved.
   This code may be used under the AGPL version 3 license.
   This notice must remain in this file and derived files. ###

learningRate = 0.3

new_neural_network = (num_input, num_hidden, num_output) ->

  data =
    numInputs: num_input
    numHidden: num_hidden
    numOutputs: num_output
    inputs: []
    hidden: Array(num_hidden)
    outputs: Array(num_output)
    w1: Array(num_input)   # will be num_input * num_hidden
    w2: Array(num_hidden)  # will be num_hidden * num_output
    output_errors: Array(num_output)
    hidden_errors: Array(num_hidden)
    input_training_examples: []
    output_training_examples: []

  for i in [0...num_input]
    data.w1[i] = Array(num_hidden)
    data.inputs[i] = 0

  for h in [0..num_hidden]
    data.w2[h] = Array(num_output)

  for i in [0...num_input]
    for h in [0...num_hidden]
       data.w1[i][h] = 0.1 * (Math.random() - 0.5)

  for h in [0...num_hidden]
    for o in [0...num_output]
      data.w2[h][o] = 0.1 * (Math.random() - 0.5);

  data

test_data = new_neural_network(3, 3, 3)
console.log test_data

add_training_example = (nn, inputs, outputs) ->
  nn.input_training_examples.push(inputs)
  nn.output_training_examples.push(outputs)

add_training_example(test_data, [0.1, 0.1, 0.9], [0.9, 0.1, 0.1])

console.log test_data

sigmoid = (x) ->
  (1.0 / (1.0 + Math.exp(-x)))

sigmoidP = (x) ->
  z = sigmoid(x)
  z * (1.0 - z)

forward_pass = (nn) ->
  for h in [0...nn.numHidden]
    nn.hidden[h] = 0
  for i in [0...nn.numInputs]
    for h in [0...nn.numHidden]
      nn.hidden[h] += nn.inputs[i] * nn.w1[i][h]
  for o in [0...nn.numOutputs]
    nn.outputs[o] = 0
  for h in [0...nn.numHidden]
    for o in [0...nn.numOutputs]
      nn.outputs[o] += sigmoid(nn.hidden[h]) * nn.w2[h][o]
  for o in [0...nn.numOutput]
    nn.outputs[o] = sigmoid(nn.outputs[o])

train = (nn) ->
  error = 0
  num_cases = nn.input_training_examples.length
  for ncase in [0...num_cases]
    # zero out the errors: at the hidden and output layers:
    for i in [0...nn.numHidden]
      nn.hidden_errors[h] = 0
    for o in [0...nn.numOutputs]
      nn.output_errors[o] = 0
    for i in [0...nn.numInputs]
      nn.inputs[i] = nn.input_training_examples[ncase][i]
    outs = nn.output_training_examples[ncase]
    forward_pass(nn)
    for o in [0..nn.numOutputs]
      nn.output_errors[o] = (outs[o] - nn.outputs[o]) * sigmoidP(nn.outputs[o])

    for h in [0...nn.numHidden]
      nn.hidden_errors[h] = 0.0
      for o in [0...nn.numOutputs]
        nn.hidden_errors[h] += nn.output_errors[o] * nn.w2[h][o]

    for h in [0...nn.numHidden]
      nn.hidden_errors[h] = nn.hidden_errors[h] * sigmoidP(nn.hidden[h])

    # update the hidden to output weights:
    for o in [0...nn.numOutputs]
      for h in [0...nn.numHidden]
        nn.w2[h][o] += learningRate * nn.output_errors[o] * nn.hidden[h]

    # update the input to hidden weights:
    for h in [0...nn.numHidden]
      for i in [0...nn.numInputs]
        nn.w1[i][h] += learningRate * nn.hidden_errors[h] * nn.inputs[i]
    for o in [0...nn.numOutputs]
      error += Math.abs(outs[o] - nn.outputs[o])

  error

for iter in [0...500]
  console.log(train(test_data))
