const quotes = [
    {
        category: "Famous Quotes",
        quoteList: [
            {
                quoteText: "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark",
                author: "Henri-Frédéric Amiel",
            },
            {
                quoteText: "Whoever is happy will make others happy, too.",
                author: "Mark Twain",
            },
            {
                quoteText: "Kind words do not cost much. Yet they accomplish much.",
                author: "Blaise Pascal",
            }
        ]
    },
    {
        category: "Inspirational",
        quoteList: [
            {
                quoteText: "Be yourself; everyone else is already taken",
                author: "Oscar Wilde",
            }
        ]
    },
    {
        category: "History",
        quoteList: [
            {
                quoteText: "You cannot escape the responsibility of tomorrow by evading it today",
                author: "Abraham Lincoln",
            }
        ]
    },
]

export default function handler(req, res) {
    res.status(200).json(quotes)
}
