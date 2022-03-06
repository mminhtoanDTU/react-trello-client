export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-3', 'column-2'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do list',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Do exercise 1',
                            cover: 'https://images.unsplash.com/photo-1646081499142-3c2945cafdc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Do exercise 2',
                            cover: null,
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Do exercise 3',
                            cover: null,
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Do exercise 4',
                            cover: null,
                        },
                    ],
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Finished',
                    cardOrder: ['card-5', 'card-6'],
                    cards: [
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Do exercise 1',
                            cover: null,
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Do exercise 2',
                            cover: null,
                        },
                    ],
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'non-important',
                    cardOrder: ['card-7', 'card-8', 'card-9'],
                    cards: [
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Do exercise 1',
                            cover: null,
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Do exercise 2',
                            cover: null,
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Do exercise 3',
                            cover: null,
                        },
                    ],
                },
            ],
        },
    ],
}
