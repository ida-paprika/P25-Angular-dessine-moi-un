export class ProjectView {
    id: number;
    description: string;
    price: number;
    deadline: Date;
    artMediumLabel: string;
    artFormatLabel: string;
    userName: string;
    progressStatus: string;

    constructor(paramId: number, paramDescription: string, paramPrice: number, paramDeadline: Date,
        paramMediumLabel: string, paramFormatLabel: string, paramUserName: string, paramProgressStatus: string) {
        this.id = paramId;
        this.description = paramDescription;
        this.price = paramPrice;
        this.deadline = paramDeadline;
        this.artMediumLabel = paramMediumLabel;
        this.artFormatLabel = paramFormatLabel;
        this.userName = paramUserName;
        this.progressStatus = paramProgressStatus;
    }
}

