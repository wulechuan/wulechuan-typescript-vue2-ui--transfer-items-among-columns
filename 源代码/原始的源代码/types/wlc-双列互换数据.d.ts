declare module Wlc双列互换数据 {
    type 范_界面元素之样式类名之配置<类名枚举 = string> = null | 类名枚举 | Array<类名枚举?> | {
        [cssClassName: string]: boolean | null | undefined;
    };

    type 范_三态勾选框之状态值 = (
        | '已勾选'
        | '部分勾选'
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

    type 范_Wlc双列互换数据类之事件名称 = (
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





    class Wlc双列互换数据类 extends Vue {
        // -------- 自动接驳数据（ 即视为 v-model 的数据 ） ----
        public readonly 乙列所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

        // -------- 外来数据 --------------------------------
        public readonly 所有候选条目之列表?: 范_基础条目之列表
        public readonly 单列允许列示的条目数之上限?: number
        public readonly 甲列之称谓?: string
        public readonly 乙列之称谓?: string
        public readonly 甲列初始的用以过滤条目之配置?: string | RegExp
        public readonly 乙列初始的用以过滤条目之配置?: string | RegExp
        public readonly 甲列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表
        public readonly 乙列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表
        public readonly 各列新增条目之插入规则?: 范_各列新增条目之插入规则
        public readonly 各列条目排序之函数?: 范_各列条目排序之函数
        public readonly 按钮上的措辞_中央竖栏默认内容_将条目从甲列迁移至乙列?: string
        public readonly 按钮上的措辞_中央竖栏默认内容_将条目从乙列迁移至甲列?: string
        public readonly 按钮上的措辞_底部内容栏默认内容_将条目从甲列迁移至乙列?: string
        public readonly 按钮上的措辞_底部内容栏默认内容_将条目从乙列迁移至甲列?: string

        // -------- 公开行为 --------------------------------
        public 将甲列选中的条目迁移至乙列 (调用者?: Vue): void
        public 将乙列选中的条目迁移至甲列 (调用者?: Vue): void

        // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        // -------- 私有数据 --------------------------------
        private 日志前缀: string
        private 所有条目之列表之去重后的缓存版本: null | 范_基础条目之列表
        private 甲列之数据集: 范_单列之内部数据集
        private 乙列之数据集: 范_单列之内部数据集
        private 将所有候选条目分配到左右两列_之期待: null | Promise<void>
        private 将所有候选条目分配到左右两列_之期待之原因: string

        // -------- 衍生数据 --------------------------------
        private get 甲列之称谓_最终采纳值 (): string
        private get 乙列之称谓_最终采纳值 (): string
        private get 用于各界面内容皿之状态汇总数据 (): 范_状态汇总数据
        private get 按钮上的措辞_中央竖栏默认内容_将条目从甲列迁移至乙列_最终采纳值 (): string
        private get 按钮上的措辞_中央竖栏默认内容_将条目从乙列迁移至甲列_最终采纳值 (): string
        private get 按钮上的措辞_底部内容栏默认内容_将条目从甲列迁移至乙列_最终采纳值 (): string
        private get 按钮上的措辞_底部内容栏默认内容_将条目从乙列迁移至甲列_最终采纳值 (): string
        private get 中央竖栏默认内容_将条目从甲列迁移至乙列_界面元素之样式类名之配置 (): 范_界面元素之样式类名之配置
        private get 中央竖栏默认内容_将条目从乙列迁移至甲列_界面元素之样式类名之配置 (): 范_界面元素之样式类名之配置

        // -------- @Watch 数据变动之处理程序 ----------------
        private 每当所有候选条目之列表变动后 (): void
        private 每当乙列所有条目之唯一标识之列表变动后 (): void

        // -------- 私有行为 -------------------------------
        private 将所有候选条目分配到左右两列 (本次原因: string): Promise<void>
        private 将某列选中的条目迁移至对方列 (起列?: 范_单列之内部数据集): void
        private 发布事件_条目之分布已变动 (): void
        private 发布事件_遭遇错误 (错误之记载或报文: Error | string): void

        // -------- 界面元素事件之处理程序 -------------------
        private 每当点击用以将甲列选中之条目迁移至乙列之按钮后 (): void
        private 每当点击用以将乙列选中之条目迁移至甲列之按钮后 (): void
        // private 每当键盘按键松开时 (键盘事件之记载: KeyboardEvent): void

        // -------- 生命周期钩子 ----------------------------
        private mounted (): void
    }
}
