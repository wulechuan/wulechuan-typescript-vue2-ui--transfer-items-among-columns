declare namespace wlc双列互换数据 {
    interface 范_条目 {
        displayName: string;
        isChecked: boolean;
        disabled: boolean;
        数据: any;
        // [key: string]: any;
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
