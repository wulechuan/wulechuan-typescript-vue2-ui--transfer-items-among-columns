export function 求可靠的数字 (原始值: any): number {
    let 拟采纳值: number = NaN

    if (typeof 原始值 === 'number') {
        拟采纳值 = 原始值
    } else if (typeof 原始值 === 'string' && 原始值.trim()) {
        拟采纳值 = +原始值.trim()
    }

    return 拟采纳值
}





export function 求可靠的文本 (原始值: any, 默认值: string, 原始值为空白字符串视为有效?: boolean): string {
    let 拟采纳值: string

    if (typeof 原始值 !== 'string') {
        拟采纳值 = ''
    } else {
        if (原始值为空白字符串视为有效) {
            拟采纳值 = 原始值
        } else {
            拟采纳值 = 原始值.trim()
        }
    }

    if (拟采纳值) { return 拟采纳值 }

    return 默认值
}





export function 尽可能将用户输入的文本视为正则表达式并用以过滤列表<范_列表之条目 = any> (
    原始列表: 范_列表之条目[],
    用户输入的匹配词: string,
    从某条目获得用以匹配之文本: (条目: 范_列表之条目) => string
): 范_列表之条目[] {
    const 日志前缀: string = '尽可能将用户输入的文本视为正则表达式并用以过滤列表：\n\t'

    if (!Array.isArray(原始列表)) {
        console.error(`${日志前缀} 第 1 个参数不是列表（ Array ）。`)
        return []
    }

    if (typeof 从某条目获得用以匹配之文本 !== 'function') {
        console.error(`${日志前缀} 第 3 个参数不是函数（ Function ）。`)
        return []
    }

    let _用以过滤条目之文本: string = ''
    if (typeof 用户输入的匹配词 === 'string') {
        _用以过滤条目之文本 = 用户输入的匹配词
    } else {
        console.warn(`${日志前缀} 第 2 个参数不是文本（ string ）。`)
    }

    let 所有匹配的条目 = 原始列表

    if (_用以过滤条目之文本) {
        const 关键词像是正则表达式: boolean = /\s*\/.+\/\s*/.test(_用以过滤条目之文本)
        let 用以匹配条目的正则表达式: RegExp | null = null

        if (关键词像是正则表达式) {
            const 正则表达式主体内容: string = _用以过滤条目之文本.trim().slice(1, -1)
            // console.debug('正则表达式主体内容', 正则表达式主体内容)
            try {
                用以匹配条目的正则表达式 = new RegExp(正则表达式主体内容, 'i')
            } catch (正则表达式格式非法) {
                console.error(`正则表达式主体内容无效。其为：“ ${正则表达式主体内容} ”。`, 正则表达式格式非法)
            }
        }

        if (用以匹配条目的正则表达式 instanceof RegExp) {
            所有匹配的条目 = 原始列表.filter(条目 => {
                const 求得的文本: string = 从某条目获得用以匹配之文本(条目)
                if (typeof 求得的文本 !== 'string') { return false }
                // console.debug(求得的文本, 用以匹配条目的正则表达式!.test(求得的文本), 用以匹配条目的正则表达式)
                return 用以匹配条目的正则表达式!.test(求得的文本)
            })
        } else {
            所有匹配的条目 = 原始列表.filter(条目 => {
                const 求得的文本: string = 从某条目获得用以匹配之文本(条目)
                if (typeof 求得的文本 !== 'string') { return false }
                return 求得的文本.indexOf(_用以过滤条目之文本) > -1
            })
        }

    }

    return 所有匹配的条目
}





export function 将变量值稳妥地映射成规定的样式类名<范_允许映射得出的规定样式类名 = string> ({
    当下给出的变量值,
    用以将变量至映射至样式类名的字典,
    默认的样式类名,
}: {
    当下给出的变量值?: any;
    默认的样式类名?: 范_允许映射得出的规定样式类名;
    用以将变量至映射至样式类名的字典?: { [变量允许采取的规定值: string]: 范_允许映射得出的规定样式类名; }
} = {}): 范_允许映射得出的规定样式类名 | null {
    if (!用以将变量至映射至样式类名的字典 || typeof 用以将变量至映射至样式类名的字典 !== 'object') { return null }

    const 裁定后的样式类名: 范_允许映射得出的规定样式类名 | undefined = 用以将变量至映射至样式类名的字典[当下给出的变量值]

    if (裁定后的样式类名 !== undefined) {
        return 裁定后的样式类名
    }

    if (typeof 默认的样式类名 !== 'string') {
        return null
    } else {
        return 默认的样式类名
    }
}
