import { partFromSimpleFunction } from "./utils/partFromSimpleFunction";

const namespace = 'Math';

export const Add = partFromSimpleFunction({
    id: 'Add',
    icon: 'fa-plus',
    namespace,
    description: 'Emits the sum of two numbers',
    inputs: [{name: 'n1', description: 'First number to add'},{name: 'n2', description: 'Second number to add'}],
    output: {name: 'sum', description: 'The sum of n1 and n2'},
    fn: (a, b) => a + b
})

export const Subtract = partFromSimpleFunction({
    id: 'Subtract',
    icon: 'fa-minus',
    namespace,
    description: 'Emits the difference of two numbers',
    inputs: [{name: 'n1', description: 'First number to subtract'},{name: 'n2', description: 'Second number to subtract'}],
    output: {name: 'difference', description: 'The difference of n1 and n2'},
    fn: (a, b) => a - b
})

export const Multiply = partFromSimpleFunction({
    id: 'Multiply',
    icon: 'fa-times',
    namespace,
    description: 'Emits the product of two numbers',
    inputs: [{name: 'n1', description: 'First number to multiply'},{name: 'n2', description: 'Second number to multiply'}],
    output: {name: 'product', description: 'The product of n1 and n2'},
    fn: (a, b) => a * b
})

export const Divide = partFromSimpleFunction({
    id: 'Divide',
    icon: 'fa-divide',
    namespace,
    description: 'Emits the quotient of two numbers',
    inputs: [{name: 'n1', description: 'First number to divide'},{name: 'n2', description: 'Second number to divide'}],
    output: {name: 'quotient', description: 'The quotient of n1 and n2'},
    fn: (a, b) => a / b
})

export const Modulo = partFromSimpleFunction({
    id: 'Modulo',
    icon: 'fa-percentage',
    namespace,
    description: 'Emits the remainder of two numbers',
    inputs: [{name: 'n1', description: 'First number to divide'},{name: 'n2', description: 'Second number to divide'}],
    output: {name: 'remainder', description: 'The remainder of n1 and n2'},
    fn: (a, b) => a % b
})

export const Power = partFromSimpleFunction({
    id: 'Power',
    icon: 'fa-superscript',
    namespace,
    description: 'Emits the power of two numbers',
    inputs: [{name: 'n1', description: 'Base number'},{name: 'n2', description: 'Exponent'}],
    output: {name: 'power', description: 'The power of n1 and n2'},
    fn: (a, b) => Math.pow(a, b)
})

export const SquareRoot = partFromSimpleFunction({
    id: 'Square Root',
    icon: 'fa-square-root-alt',
    namespace,
    description: 'Emits the square root of a number',
    inputs: [{name: 'n', description: 'Number to take the square root of'}],
    output: {name: 'root', description: 'The square root of n'},
    fn: (n) => Math.sqrt(n)
})

export const AbsoluteValue = partFromSimpleFunction({
    id: 'Absolute Value',
    icon: 'fa-abs',
    namespace,
    description: 'Emits the absolute value of a number',
    inputs: [{name: 'n', description: 'Number to take the absolute value of'}],
    output: {name: 'absolute', description: 'The absolute value of n'},
    fn: (n) => Math.abs(n)
})

export const Floor = partFromSimpleFunction({
    id: 'Floor',
    icon: 'fa-floor',
    namespace,
    description: 'Emits the floor of a number',
    inputs: [{name: 'n', description: 'Number to take the floor of'}],
    output: {name: 'floor', description: 'The floor of n'},
    fn: (n) => Math.floor(n)
})

export const Ceiling = partFromSimpleFunction({
    id: 'Ceiling',
    icon: 'fa-ceiling',
    namespace,
    description: 'Emits the ceiling of a number',
    inputs: [{name: 'n', description: 'Number to take the ceiling of'}],
    output: {name: 'ceiling', description: 'The ceiling of n'},
    fn: (n) => Math.ceil(n)
})

export const Round = partFromSimpleFunction({
    id: 'Round',
    icon: 'fa-round',
    namespace,
    description: 'Emits the rounded value of a number',
    inputs: [{name: 'n', description: 'Number to round'}],
    output: {name: 'rounded', description: 'The rounded value of n'},
    fn: (n) => Math.round(n)
})

export const Truncate = partFromSimpleFunction({
    id: 'Truncate',
    icon: 'fa-truncate',
    namespace,
    description: 'Emits the truncated value of a number',
    inputs: [{name: 'n', description: 'Number to truncate'}],
    output: {name: 'truncated', description: 'The truncated value of n'},
    fn: (n) => Math.trunc(n)
})

export const Sin = partFromSimpleFunction({
    id: 'Sin',
    icon: 'fa-sin',
    namespace,
    description: 'Emits the sine of an angle',
    inputs: [{name: 'angle', description: 'Angle in radians'}],
    output: {name: 'sine', description: 'The sine of angle'},
    fn: (n) => Math.sin(n)
})

export const Cos = partFromSimpleFunction({
    id: 'Cos',
    icon: 'fa-cos',
    namespace,
    description: 'Emits the cosine of an angle',
    inputs: [{name: 'angle', description: 'Angle in radians'}],
    output: {name: 'cosine', description: 'The cosine of angle'},
    fn: (n) => Math.cos(n)
})

export const Min = partFromSimpleFunction({
    id: 'Min',
    namespace,
    description: 'Emits the minimum of two numbers',
    inputs: [{name: 'n1', description: 'First number'},{name: 'n2', description: 'Second number'}],
    output: {name: 'min', description: 'The minimum of n1 and n2'},
    fn: (a, b) => Math.min(a, b)
})

export const Max = partFromSimpleFunction({
    id: 'Max',
    namespace,
    description: 'Emits the maximum of two numbers',
    inputs: [{name: 'n1', description: 'First number'},{name: 'n2', description: 'Second number'}],
    output: {name: 'max', description: 'The maximum of n1 and n2'},
    fn: (a, b) => Math.max(a, b)
})
