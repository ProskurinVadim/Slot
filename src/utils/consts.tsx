const phrase = [
	"You Win Notihing",
	"I Made It For Fun",
	"Awesome",
	"Wonderfull",
	"Don't play in real",
	"Try Again Ween More",
] as const

const items = [
    '🦄',
    '🍌',
    '💩',
    '👻',
    '😻',    
    '🤡',
    '🍎',
    '🖕',
] as const

const winCombination = [
    [
        { i: 0, j: 0 }, { i: 0, j: 1 }, { i: 0, j: 2 },
    ],
    [
        { i: 1, j: 0 }, { i: 0, j: 1 }, { i: 0, j: 2 },
    ],
    [
        { i: 2, j: 0 }, { i: 0, j: 1 }, { i: 0, j: 2 },
    ],
    [
        { i: 0, j: 0 }, { i: 1, j: 0 },{ i: 2, j: 0 },
    ],
    [
        { i: 0, j: 1 }, { i: 1, j: 1 }, { i: 2, j: 1 },
    ],
    [
        { i: 0, j: 2 }, { i: 1, j: 2 },{ i: 2, j: 2 },
    ],
    [
        { i: 0, j: 0 }, { i: 1, j: 1 }, { i: 2, j: 2 },
    ],
    [
        { i: 2, j: 0 }, { i: 1, j: 1 }, { i: 0, j: 2 },
    ],  
] as const

const defaultItems = [
    ["-", '❓', "-"],
    ["-", '❓', "-"],
    ["-", '❓', "-"]
]

export { phrase, items, winCombination, defaultItems}