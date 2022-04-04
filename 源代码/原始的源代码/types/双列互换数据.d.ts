declare namespace Wlc双列互换数据 {
    type 范_界面元素之样式类名之配置 = null | string | Array<string> | {
        [cssClassName: string]: boolean | null | undefined;
    };

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

    type 范_状态汇总数据 = {
        甲列当下选中的条目之总数: number;
        乙列当下选中的条目之总数: number;
        甲列当下没有条目拟迁移至乙列: boolean;
        乙列当下没有条目拟迁移至甲列: boolean;
    }
}

declare class Wlc双列互换数据  {
    public 将甲列选中的条目迁移至乙列 (): void;
    public 将乙列选中的条目迁移至甲列 (): void;
}
