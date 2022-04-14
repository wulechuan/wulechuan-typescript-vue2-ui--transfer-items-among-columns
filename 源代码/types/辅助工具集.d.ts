export declare function 求可靠的数字(原始值: any): number;
export declare function 求可靠的文本(原始值: any, 默认值: string, 原始值为空白字符串视为有效?: boolean): string;
export declare function 尽可能将用户输入的文本视为正则表达式并用以过滤列表<范_列表之条目 = any>(原始列表: 范_列表之条目[], 用户输入的匹配词: string, 从某条目获得用以匹配之文本: (条目: 范_列表之条目) => string): 范_列表之条目[];
export declare function 将变量值稳妥地映射成规定的样式类名<范_允许映射得出的规定样式类名 = string>({ 当下给出的变量值, 用以将变量至映射至样式类名的字典, 默认的样式类名 }?: {
    当下给出的变量值?: any;
    默认的样式类名?: 范_允许映射得出的规定样式类名;
    用以将变量至映射至样式类名的字典?: {
        [变量允许采取的规定值: string]: 范_允许映射得出的规定样式类名;
    };
}): 范_允许映射得出的规定样式类名 | null;
