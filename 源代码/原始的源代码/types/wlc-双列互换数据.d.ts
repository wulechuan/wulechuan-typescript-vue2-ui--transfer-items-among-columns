declare module Wlc双列互换数据 {
    type 范_界面元素之样式类名之配置 = null | string | Array<string> | {
        [cssClassName: string]: boolean | null | undefined;
    };

    type 范_条目之唯一标识 = number | string;
    type 范_条目之唯一标识之列表 = Array<范_条目之唯一标识>;

    interface 范_条目 {
        唯一标识: 范_条目之唯一标识;
        在界面中的称谓: string;
        已选中: boolean;
        已禁止交互: boolean;
        数据?: any;
    };

    type 范_条目之列表 = Array<范_条目>;

    type 范_单列之内部数据集 = {
        所有条目: 范_条目之列表;
        当下选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表;
    }

    type 范_状态汇总数据 = {
        甲列当下选中的条目之总数: number;
        乙列当下选中的条目之总数: number;
        甲列当下没有条目拟迁移至乙列: boolean;
        乙列当下没有条目拟迁移至甲列: boolean;
    };

    class Wlc双列互换数据类 extends Vue {
        public readonly 乙列所有条目之唯一标识之列表?: Wlc双列互换数据.范_条目之唯一标识之列表
        public readonly 所有候选条目之列表?: Wlc双列互换数据.范_条目之列表
        public readonly 单列允许列示的条目数之上限?: number
        public readonly 甲列之称谓?: string
        public readonly 乙列之称谓?: string

        public 将甲列选中的条目迁移至乙列 (调用者?: Vue): void
        public 将乙列选中的条目迁移至甲列 (调用者?: Vue): void

        // -----------------------------------------------------

        private 日志前缀: string
        private 甲列之数据集: Wlc双列互换数据.范_单列之内部数据集
        private 乙列之数据集: Wlc双列互换数据.范_单列之内部数据集

        private get 甲列之称谓_最终采纳值 (): string
        private get 乙列之称谓_最终采纳值 (): string
        private get 用于各界面内容皿之状态汇总数据 (): Wlc双列互换数据.范_状态汇总数据

        private 每当乙列所有条目之唯一标识之列表变动后 (): void
        private 每当所有候选条目之列表变动后 (): void

        private 将所有候选条目分配到左右两列 (): void
        private 将某列选中的条目迁移至对方列 (起列?: Wlc双列互换数据.范_单列之内部数据集): void
        private 发布事件_遭遇错误 (错误之记载或报文: Error | string): void
        private 发布事件_条目之分布已变动 (): void

        private 每当点击用以将甲列选中之条目迁移至乙列之按钮后 (): void
        private 每当点击用以将乙列选中之条目迁移至甲列之按钮后 (): void

        private mounted (): void
    };
}
