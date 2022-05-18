export class ProjectCreate {
    description: string;
    deadline: Date;
    artMediumId: number;
    artFormatId: number;
    price!: number;
    artistId!: number;

    constructor(
        paramDescription: string, paramDeadline: Date,
        paramMediumId: number, paramFormatId: number
    ) {
        this.description = paramDescription;
        this.deadline = paramDeadline;
        this.artMediumId = paramMediumId;
        this.artFormatId = paramFormatId;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setArtistId(artistId: number) {
        this.artistId = artistId;
    }
}
