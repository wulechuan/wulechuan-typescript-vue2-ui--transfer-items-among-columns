declare module '@wulechuan/vue2-ui--columns-exchange-items' {
    export as namespace Wlc任意两列互换数据
}





declare namespace Wlc任意两列互换数据 {
    type 范_三态勾选框之状态值 = (
        | '已勾选'
        | '已部分勾选'
        | '未勾选'
    );

    type 范_信息文本块_配色方案之名称 = (
        | ''
        | '默认'
        | '亮'
        | '暗'
    );

    type 范_信息文本块_标准配色方案之磨砂玻璃效果之名称 = (
        | ''
        | '默认'
        | '弱'
        | '无'
    );

    type 泛范_界面元素之样式类名之配置<string或类名枚举 = string> = null | string或类名枚举 | Array<string或类名枚举?> | {
        [cssClassName: string]: boolean | null | undefined;
    };

    type 范_交互项之三态勾选框_特征样式类名 = 泛范_界面元素之样式类名之配置<(
        | '已禁止交互'
        | '已勾选'
        | '未勾选'
        | '已部分勾选'
    )>;





    type 范_条目之唯一标识 = number | string;
    type 范_条目之唯一标识之列表 = Array<范_条目之唯一标识>;

    interface 范_基础条目 {
        唯一标识: 范_条目之唯一标识;
        在界面中的称谓: string;
        已禁止选择?: boolean;
        数据?: any;
    }

    interface 范_内用格式之条目 extends 范_基础条目 {
        已禁止选择: boolean;
        已选中: boolean;
    }

    type 范_基础条目之列表 = Array<范_基础条目>;
    type 范_内用格式之条目之列表 = Array<范_内用格式之条目>;

    type 范_状态汇总数据 = {
        甲列当下选中的条目之总数: number;
        乙列当下选中的条目之总数: number;
        甲列当下没有条目拟迁移至乙列: boolean;
        乙列当下没有条目拟迁移至甲列: boolean;
    };

    type 范_类范_Wlc任意两列互换数据之现成实用双列之事件名称 = (
        | '条目之分布已变动'
        | '已出错'
    );

    /**
     * - `总是参与排序` 为首要默认值。当【排序函数】确已给出时，若并未给出【插入规则】，则【插入规则】采纳该值。
     * - `总是追加在尾部` 为次要默认值。当【排序函数】并未给出时，若亦未给出【插入规则】，则【插入规则】采纳该值。
     */
    type 范_各列新增条目之插入规则 = (
        | '总是参与排序'
        | '总是追加在尾部'
        | '总是追加在首部'
    );

    type 范_各列条目排序之函数 = (甲: 范_基础条目, 乙: 范_基础条目) => number;
}
