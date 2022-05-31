export class ProjectView {
    id: number;
    createdAt: Date;
    description: string;
    price: number;
    deadline: Date;
    artMediumLabel: string;
    artFormatLabel: string;
    userName: string;
    progressStatus: string;

    constructor(paramId: number, paramCreatedAt: Date, paramDescription: string, paramPrice: number, paramDeadline: Date,
        paramMediumLabel: string, paramFormatLabel: string, paramUserName: string, paramProgressStatus: string) {
        this.id = paramId;
        this.createdAt = paramCreatedAt;
        this.description = paramDescription;
        this.price = paramPrice;
        this.deadline = paramDeadline;
        this.artMediumLabel = paramMediumLabel;
        this.artFormatLabel = paramFormatLabel;
        this.userName = paramUserName;
        this.progressStatus = paramProgressStatus;
    }
}

