var learningRate = 0.3;

function new_neural_network (num_input, num_hidden, num_output) {
    var data = {
        numInputs: num_input,
        numHidden: num_hidden,
        numOutputs: num_output,
        inputs: new Array(num_input),
        hidden: new Array(num_hidden),
        outputs: new Array(num_output),
        w1: new Array(num_input), // will be num_input * num_hidden
        w2: new Array(num_hidden), // will be num_hidden * num_output
        output_errors: new Array(num_output),
        hidden_errors: new Array(num_hidden),
        input_training_examples: [],
        output_training_examples: []
    }
    for (var i = 0; i < num_input; i++) {
	  data.w1[i] = new Array(num_hidden);
	  data.inputs[i] = 0;
	}
    for (var i = 0; i < num_hidden; i++) data.w2[i] = new Array(num_output);
    for (var i = 0; i < num_input; i++) {
        for (var h=0; h<num_hidden; h++) data.w1[i][h] = 0.1 * (Math.random() - 0.5);
    }
    for (var h = 0; h < num_hidden; h++) {
        for (var o=0; o<num_output; o++) data.w2[h][o] = 0.1 * (Math.random() - 0.5);
    }
    return data;
}

var test_data = new new_neural_network(3,3,3);
console.log(test_data);

function add_training_example(nn, inputs, outputs) {
    nn.input_training_examples.push(inputs);
    nn.output_training_examples.push(outputs);
}

add_training_example(test_data, [0.1, 0.1, 0.9], [0.9, 0.1, 0.1]);

console.log(test_data);

function sigmoid(x) {
	return (1.0 / (1.0 + Math.exp(-x)));
}

function sigmoidP (x) {
    var z = sigmoid(x);
    return (z * (1.0 - z));
}

console.log(sigmoid(-2));
console.log(sigmoid(0.0));
console.log(sigmoid(2));
console.log(sigmoidP(2));

function forward_pass (nn) {
	var i, h, o;
	for (h=0; h<nn.numHidden; h++) nn.hidden[h] = 0;
	for (i=0; i<nn.numInputs; i++) {
		for (h=0; h<nn.numHidden; h++) nn.hidden[h] += nn.inputs[i] * nn.w1[i][h];
	}
	for (o=0; o<nn.numOutputs; o++) nn.outputs[o] = 0;
	for (h=0; h<nn.numHidden; h++) {
		for (o=0; o<nn.numOutputs; o++) nn.outputs[o] += sigmoid(nn.hidden[h]) * nn.w2[h][o];
	}
	for (o=0; o<nn.numOutput; o++) nn.outputs[o] = sigmoid(nn.outputs[o]);
}

function train(nn) {
    var i, h, o;
    var error = 0;
    var num_cases = nn.input_training_examples.length;
	for (var ncase=0; ncase< num_cases; ncase++) {
		// zero out the errors: at the hidden and output layers:
		for (h=0; h<nn.numHidden; h++) nn.hidden_errors[h] = 0;
		for (o=0; o<nn.numOutputs; o++) nn.output_errors[o] = 0;
		for (i=0; i<nn.numInputs; i++) nn.inputs[i] = nn.input_training_examples[ncase][i];
		var outs = nn.output_training_examples[ncase];
		forward_pass(nn);
		for (o=0; o<nn.numOutputs; o++)  {
            nn.output_errors[o] = (outs[o] - nn.outputs[o]) * sigmoidP(nn.outputs[o]);
        }
		for (h=0; h<nn.numHidden; h++) {
          nn.hidden_errors[h] = 0.0;
          for (o=0; o<nn.numOutputs; o++) {
             nn.hidden_errors[h] += nn.output_errors[o] * nn.w2[h][o];
          }
        }
		for (h=0; h<nn.numHidden; h++) {
           nn.hidden_errors[h] =
             nn.hidden_errors[h]*sigmoidP(nn.hidden[h]);
        }
		// update the hidden to output weights:
        for (o=0; o<nn.numOutputs; o++) {
           for (h=0; h<nn.numHidden; h++) {
              nn.w2[h][o] +=
                 learningRate * nn.output_errors[o] * nn.hidden[h];
           }
        }
        // update the input to hidden weights:
        for (h=0; h<nn.numHidden; h++) {
           for (i=0; i<nn.numInputs; i++) {
               nn.w1[i][h] +=
                  learningRate * nn.hidden_errors[h] * nn.inputs[i];
           }
        }
          for (o = 0; o < nn.numOutputs; o++) {
              error += Math.abs(outs[o] - nn.outputs[o]);
          }
	}
	return error;
}

var error = train(test_data);
console.log(test_data);
console.log(error);

for (var iter=0; iter<500; iter++) console.log(train(test_data));

