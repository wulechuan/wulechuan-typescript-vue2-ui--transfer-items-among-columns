declare namespace Wlc双列互换数据 {
    type 范_列之内部代号 = '左列' | '右列'

    type 范_条目之唯一标识 = number | string;
    type 范_条目之唯一标识之列表 = Array<范_条目之唯一标识>;
    interface 范_条目 {
        唯一标识: 范_条目之唯一标识;
        在界面展示时的称谓: string;
        已选中: boolean;
        已禁止交互: boolean;
        数据?: any;
    }
    type 范_条目之列表 = Array<范_条目>

    type 范_单列配置项集 = {
        所有条目: 范_条目之列表;
        当下选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表;
    }
}
