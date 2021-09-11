interface MovieDetail {
    Plot: string
    Actors: string
    Ratings: Rating[]
}

interface Rating {
    Source: string
    Value: string;
}