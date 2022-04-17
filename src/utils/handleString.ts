import _ from 'lodash';

export function GetNumberText(arr: any, index: number): string {
    return `${index}/${arr.length}`;
}

export function getIndexFromIdName(idName: string): number {
    return Number(idName.split('-').slice(-1)[0]);
}

export function getRandomStringNameImage(): string {
    return `${new Date().getTime()}-${Math.random()}.jpg`;
}

export const getAuthorizationFromCookies = (cookieString: string): string => {
    return _.replace(cookieString, 'token=', '');
};

export const checkIsLoggin = (cookieString: string): boolean => {
    return _.startsWith(cookieString, 'token=');
};

export const getFullAuthorizationString = (): string => {
    // console.log("Get Full Authorization String");
    return document.cookie !== ''
        ? getAuthorizationFromCookies(document.cookie)
        : 'Bearer ';
};
