export interface Medium {
    id: number;
    label: string;

    getId(): number;
    setId(id: number): number;

    getLabel(): string;
    setLabel(label: string): string;

}
