declare namespace Wlc双列互换数据 {
    interface 范_条目 {
        唯一标识: number | string;
        在界面展示时的称谓: string;
        已选中: boolean;
        已禁止交互: boolean;
        数据?: any;
    }

    type 范_条目之列表 = Array<范_条目>
    // interface 范_条目之列表 extends Array<any> {
    //     [索引编号: number]: 范_条目;
    // }

    type 范_列代号 = '左列' | '右列'

    type 范_单列配置项集 = {
        filteringKeyword: string;
        allAreChecked: boolean;
        allVisibleAreChecked: boolean;
        allItems: 范_条目之列表;
        checkedItemsCache: 范_条目之列表;
    }
}
