const LANGUAGE = 'en'

let options = [
    {
        name: 'fruits',
    },
    {
        name: 'snacks',
    }
]

let fruits = [
    {
        name: 'apple'
    },
    {
        name: 'apricot'
    },
    {
        name: 'avocado'
    },
    {
        name: 'banana'
    },
    {
        name: 'blackberry'
    },
    {
        name: 'blackcurrant'
    },
    {
        name: 'blueberry'
    },
    {
        name: 'boysenberry'
    },
    {
        name: 'cherry'
    },
    {
        name: 'coconut'
    },
    {
        name: 'fig'
    },
    {
        name: 'grape'
    },
    {
        name: 'grapefruit'
    },
    {
        name: 'kiwifruit'
    },
    {
        name: 'lemon'
    },
    {
        name: 'lime'
    },
    {
        name: 'lemon'
    },
    {
        name: 'lychee'
    },
    {
        name: 'mandarin'
    },
    {
        name: 'mango'
    },
    {
        name: 'melon'
    },
    {
        name: 'nectarine'
    },
    {
        name: 'orange'
    },
    {
        name: 'papaya'
    },
    {
        name: 'passion fruit'
    },
    {
        name: 'peach'
    },
    {
        name: 'pear'
    },
    {
        name: 'pineapple'
    },
    {
        name: 'plum'
    },
    {
        name: 'pomegranate'
    },
    {
        name: 'quince'
    },
    {
        name: 'raspberry'
    },
    {
        name: 'strawberry'
    },
    {
        name: 'watermelon'
    }
]

export function getFruits() {
    if (LANGUAGE === 'pt') {
        fruits = fruits.map(fruit => {
            if (fruit.name === 'apple') return { ...fruit, name: 'maçã' }
            else if (fruit.name === 'apricot') return { ...fruit, name: 'damasco' }
            return fruit
        })
    }
    return fruits
}
export function getOptions() {
    if (LANGUAGE === 'pt') {
        options = options.map(option => {
            if (option.name === 'fruits') return { ...option, name: 'frutas' }
            else if (option.name === 'snacks') return { ...option, name: 'lanches' }
            return option
        })
    }
    return options
}