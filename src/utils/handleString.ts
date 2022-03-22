export function GetNumberText(arr: any, index: number): string {
    return `${index}/${arr.length}`;
}

export function getIndexFromIdName(idName: string): number {
    return Number(idName.split('-').slice(-1)[0]);
}