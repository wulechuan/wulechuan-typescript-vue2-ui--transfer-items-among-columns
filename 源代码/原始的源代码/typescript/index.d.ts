/// <reference types="vue" />
type VueConstructor = Vue.VueConstructor
type VueConstructorOptions = Vue.ComponentOptions<Vue>





declare module '@wulechuan/vue2-ui--transfer-items-among-columns' {
    export = Wlc任意两列间转移条目
}





declare namespace Wlc任意两列间转移条目 {
    namespace Wlc任意两列间转移条目_专用工具集 {
        function 将某列选中的条目迁移至另一列(迁移前起列所有条目之列表?: 范_内用格式之条目之列表, 迁移前迄列所有条目之列表?: 范_内用格式之条目之列表): null | {
            迁移后起列所有条目之列表: 范_内用格式之条目之列表;
            迁移后迄列所有条目之列表: 范_内用格式之条目之列表;
        };
    }

    namespace 辅助工具集 {
        function 求可靠的数字(原始值: any): number;
        function 求可靠的文本(原始值: any, 默认值: string, 原始值为空白字符串视为有效?: boolean): string;
        function 尽可能将用户输入的文本视为正则表达式并用以过滤列表<范_列表之条目 = any>(原始列表: 范_列表之条目[], 用户输入的匹配词: string, 从某条目获得用以匹配之文本: (条目: 范_列表之条目) => string): 范_列表之条目[];
        function 将变量值稳妥地映射成规定的样式类名<范_允许映射得出的规定样式类名 = string>({ 当下给出的变量值, 用以将变量至映射至样式类名的字典, 默认的样式类名 }?: {
            当下给出的变量值?: any;
            默认的样式类名?: 范_允许映射得出的规定样式类名;
            用以将变量至映射至样式类名的字典?: {
                [变量允许采取的规定值: string]: 范_允许映射得出的规定样式类名;
            };
        }): 范_允许映射得出的规定样式类名 | null;
    }





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

    type 泛范_界面元素之样式类名之配置<string或类名枚举 = string> = null | string或类名枚举 | Array<null | string或类名枚举> | {
        [cssClassName: string]: boolean | null | undefined;
    };

    type 范_交互项之三态勾选框_特征样式类名 = 泛范_界面元素之样式类名之配置<(
        | '不可用' // 指没有对应的资源受该勾选框操控。
        | '已禁止交互' // 指虽然有对应资源拟受该勾选框操控，但该勾选框已禁止交互。
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

    type 范_类范_Wlc任意两列间转移条目之现成实用双列之事件名称 = (
        | '条目之分布已变动'
        | '已出错'
    );

    /**
     * - `总是参与排序` 为首要默认值。当【排序函数】确已给出时，若并未给出【插入规则】，则【插入规则】采纳该值。
     * - `总是在队尾追加` 为次要默认值。当【排序函数】并未给出时，若亦未给出【插入规则】，则【插入规则】采纳该值。
     */
    type 范_各列新增条目之插入规则 = (
        | '总是参与排序'
        | '总是在队尾追加'
        | '总是在队首插入'
    );

    type 范_各列条目排序之函数 = (甲: 范_基础条目, 乙: 范_基础条目) => number;

    type 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串 = VueConstructor | VueConstructorOptions
    type 范_Vue动态部件之Is属性可接受的数据_且可以是部件名称字符串 = 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串 | string;





    class Wlc任意两列间转移条目_单列 extends Vue {
        // -------- 自动接驳数据（ 即视为 v-model 的数据 ） ----
        public readonly 当下选中的所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

        // -------- 外来数据 --------------------------------
        public readonly 应全面禁止交互?: boolean
        public readonly 本列之称谓?: string
        public readonly 本列之特征样式类名之配置?: 泛范_界面元素之样式类名之配置
        public readonly 允许列示的条目数之上限?: number | string
        public readonly 所有条目之列表?: 范_内用格式之条目之列表
        public readonly 新增条目之插入规则?: 范_各列新增条目之插入规则
        public readonly 条目排序之函数?: 范_各列条目排序之函数
        public readonly 本列初始的用以过滤条目之配置?: string | RegExp
        public readonly 当下另有他列优先于本列采取视觉强调引导用户操作之?: boolean
        public readonly 无需底部的说明书功能区?: boolean
        public readonly vue部件之定义_订制的主表条目?: null | 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串
        public readonly 应在控制台输出详尽的调试信息?: boolean

        // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        // -------- 私有数据 --------------------------------
        private 用以筛选条目之关键词: string
        private 所有条目之列表_最终采纳值: 范_内用格式之条目之列表
        private 所有条目之列表_最终采纳值_求解之期待: null | Promise<boolean>
        private 所有条目之列表_最终采纳值_求解之期待之原因: string
        private 三态勾选框_所有条目_含隐藏之条目_之勾选状态统计_之状态值: 范_三态勾选框之状态值
        private 三态勾选框_所有条目_仅列示之条目_之勾选状态统计_之状态值: 范_三态勾选框之状态值
        private 最末经由交互动作改变其选中之状态之条目: 范_内用格式之条目 | null
        private 最末经由交互动作改变其选中之状态之条目_系选中之: boolean | null
        private 应呈现列表操作说明书: boolean

        // -------- 衍生数据 --------------------------------
        private get 应全面禁止交互_最终采纳值 (): boolean
        private get 本列之称谓_最终采纳值 (): string
        private get 日志前缀 (): string
        private get 本列之标题栏之文字 (): string
        private get 当下有浮层覆盖着条目列表 (): boolean
        private get 允许列示的条目数之上限_最终采纳值 (): number
        private get 新增条目之插入规则_最终采纳值 (): 范_各列新增条目之插入规则
        private get 所有条目之总数 (): number
        private get 条目过滤器之文本输入框之空框状态提示措辞 (): string
        private get 所有未禁止交互之条目之列表 (): 范_内用格式之条目之列表
        private get 匹配当下过滤配置之所有条目之列表 (): 范_内用格式之条目之列表
        private get 当下列示着的所有条目之列表 (): 范_内用格式之条目之列表
        private get 当下列示着的所有未禁止交互之条目之列表 (): 范_内用格式之条目之列表
        private get 当下期望列示的条目过多故暂不列示任何条目 (): boolean
        private get 当下已选中的所有条目_含隐藏之条目_之列表 (): 范_内用格式之条目之列表
        private get 当下已选中的所有条目_仅列示的条目_之列表 (): 范_内用格式之条目之列表
        private get 应禁止条目过滤器交互 (): boolean
        private get 条目过滤器文本输入框元素之样式类名配置 (): 泛范_界面元素之样式类名之配置
        private get 当下有否某种视觉强调之结论 (): boolean
        private get 与选中所有条目_含隐藏之条目_之交互相关之汇总数据 (): Wlc任意两列间转移条目_单列.范_与选中所有条目之交互相关之汇总数据
        private get 与选中所有条目_仅列示之条目_之交互相关之汇总数据 (): Wlc任意两列间转移条目_单列.范_与选中所有条目之交互相关之汇总数据
        private get vue部件之定义_订制的主表条目_最终采纳值(): 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串

        // -------- @Watch 数据变动之处理程序 ----------------
        private 每当外界给出的所有条目之列表变动后 (新值: 范_内用格式之条目之列表): void
        private 每当外界给出的当下选中的所有条目之唯一标识之列表变动后 (新值: 范_条目之唯一标识之列表): void
        private 每当外界给出的当下有否某种视觉强调之结论变动后 (新值: boolean): void
        private 每当外界给出的本列初始的用以过滤条目之配置变动后 (新值: string | RegExp): void
        private 每当用以筛选条目之关键词变动后 (新值: string): void

        // -------- 私有行为 -------------------------------
        private 根据外界给出的条件构建实用的条目总表 (本次原因: Wlc任意两列间转移条目_单列.范_构建实用的条目总表_发起之原因): Promise<boolean>
        private 求某条目之样式类名集_其皿元素 (条目: 范_内用格式之条目): 泛范_界面元素之样式类名之配置
        private 求某条目之样式类名集_其根元素 (条目: 范_内用格式之条目): 泛范_界面元素之样式类名之配置
        private 求_与全部选中或取消选中某些条目有关之三态勾选框之汇总数据 (本次统计时应将暂不可见的条目一并计入?: boolean): Wlc任意两列间转移条目_单列.范_与选中所有条目之交互相关之汇总数据
        private 选中或取消选中一系列列示着的条目 (本次目的是选中这一系列条目?: boolean, 条目甲?: any, 条目乙?: any): void
        private 选中或取消选中一系列条目_含隐藏之条目 (本次目的是选中这一系列条目?: boolean, 条目甲?: any, 条目乙?: any): void
        private 选中或取消选中一系列条目 (应考察的所有条目之列表?: 范_内用格式之条目之列表, 本次目的是选中这一系列条目?: boolean, 条目甲?: any, 条目乙?: any): void
        private 每当有任何条目之选中状态变动时 (): void
        private 统计某应考察之条目之列表中的勾选状态 (所有应考察之条目: 范_内用格式之条目之列表): 范_三态勾选框之状态值
        private 统计所有条目_含隐藏条目_之勾选状态 (): void
        private 统计所有条目_仅列示条目_之勾选状态 (): void
        // - - - - - - - - - - - - - - - - - - - - - - -
        private 发布事件_选中的条目已变动 (): void
        private 发布事件_某元素之视觉强调之状态已变动 (当下有否某种视觉强调之结论?: boolean): void

        // -------- 界面元素事件之处理程序 -------------------
        private 每当选择所有条目或清除所有条目之选中状态_含隐藏之条目_之交互项动作时 (界面表单元素变动事件之记载: InputEvent): void
        private 每当选择所有条目或清除所有条目之选中状态_仅列示之条目_之交互项动作时 (界面表单元素变动事件之记载: InputEvent): void
        private 每当根元素点击后 (事件之记载: PointerEvent): void
        private 每当列表操作说明书开关按钮点击时 (): void
        private 每当点击某条目后 (被点击之条目: 范_内用格式之条目, 事件之记载: PointerEvent): void
    }

    namespace Wlc任意两列间转移条目_单列 {
        type 泛范_实例可绑定之属性集<范_实际条目 extends 范_基础条目> = {
            // 用于 v-model 双向绑定。
            当下选中的所有条目之唯一标识之列表?: 范_条目之唯一标识之列表;

            // 用于 props 单向绑定。
            可成批自动绑定的属性?: {
                应全面禁止交互?: boolean;
                本列之称谓?: string;
                所有条目之列表?: 范_实际条目[];
                本列之特征样式类名之配置?: null | string;
                允许列示的条目数之上限?: null | number;
                新增条目之插入规则?: null | 范_各列新增条目之插入规则;
                条目排序之函数?: null | 范_各列条目排序之函数;
                本列初始的用以过滤条目之配置?: null | string | RegExp;
                当下另有他列优先于本列采取视觉强调引导用户操作之?: null | boolean;
                无需底部的说明书功能区?: null | boolean;
                vue部件之定义_订制的主表条目?: null | 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串;
                应在控制台输出详尽的调试信息?: boolean;
            };
        };

        type 范_事件名称 = (
            | '选中的条目已变动'
            | '内部某元素之视觉强调之状态已变动'
        );

        type 范_构建实用的条目总表_发起之原因 = (
            | '所有条目之列表变动'
            | '当下选中的所有条目之唯一标识之列表变动'
        );

        type 范_交互项之界面措辞 = (
            | '--'
            | '无可勾选项'
            | '选中所有条目（含未列示条目）'
            | '选中所有条目（仅列示条目）'
            | '清除所有选择（含未列示条目）'
            | '清除所有选择（仅列示条目）'
        );

        type 范_与选中所有条目之交互相关之汇总数据 = {
            三态勾选框之配文之措辞: 范_交互项之界面措辞;
            应禁止三态勾选框之交互: boolean;
            三态勾选框之状态值: 范_三态勾选框之状态值;
            交互项之特征样式类名_三态勾选框_其根元素: '已勾选' | '已部分勾选' | '未勾选' | '已禁止交互';
            交互项之特征样式类名_三态勾选框_其勾选项之根元素: '已勾选' | '已部分勾选' | '未勾选' | '已禁止交互';
        };
    }





    class Wlc任意两列间转移条目_单列之说明书 extends Vue {
        // -------- 自动接驳数据（ 即视为 v-model 的数据 ） ----
        public readonly 当下正呈现着?: boolean

        // -------- 外来数据 --------------------------------
        public readonly 采用的标准配色方案之名称?: 范_信息文本块_配色方案之名称
        public readonly 采用的标准配色方案之磨砂玻璃效果之名称?: 范_信息文本块_标准配色方案之磨砂玻璃效果之名称

        // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        // -------- 衍生数据 --------------------------------
        private get 采用的标准配色方案之名称_最终采纳值 (): '' | '标准配色-亮' | '标准配色-暗' | null
        private get 采用的标准配色方案之磨砂玻璃效果之名称_最终采纳值 (): '' | '磨砂玻璃效果-弱' | '磨砂玻璃效果-无' | null
        private get 界面根元素之样式类名之配置 (): 泛范_界面元素之样式类名之配置

        // -------- 私有行为 -------------------------------
        // - - - - - - - - - - - - - - - - - - - - - - -
        private 发布事件_呈现状态期望变更 (期望呈现: boolean): void

        // -------- 界面元素事件之处理程序 -------------------
        private 每当关闭按钮点击后 (事件之记载: PointerEvent): void
    }

    namespace Wlc任意两列间转移条目_单列之说明书 {
        type 范_事件名称 = (
            | '呈现状态期望变更'
        );
    }





    class Wlc任意两列间转移条目_两列之间之竖栏_默认形态 extends Vue {
        // -------- 外来数据 --------------------------------
        public readonly 应全面禁止交互?: boolean
        public readonly 界面措辞_按钮甲?: string
        public readonly 界面措辞_按钮乙?: string
        public readonly 甲列当下选中的条目之总数?: number
        public readonly 乙列当下选中的条目之总数?: number

        // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        // -------- 衍生数据 --------------------------------
        private get 界面措辞_按钮甲_最终采纳值 (): string
        private get 界面措辞_按钮乙_最终采纳值 (): string
        private get 界面元素之样式类名之配置_按钮甲 (): 泛范_界面元素之样式类名之配置
        private get 界面元素之样式类名之配置_按钮乙 (): 泛范_界面元素之样式类名之配置
        private get 甲列当下选中的条目之总数_最终采纳值 (): number
        private get 乙列当下选中的条目之总数_最终采纳值 (): number
        private get 甲列当下有至少一条选中之条目 (): boolean
        private get 乙列当下有至少一条选中之条目 (): boolean
        private get 应禁止按钮甲交互 (): boolean
        private get 应禁止按钮乙交互 (): boolean

        // -------- 私有行为 -------------------------------
        // - - - - - - - - - - - - - - - - - - - - - - -
        private 发布事件_已点击按钮甲 (): void
        private 发布事件_已点击按钮乙 (): void

        // -------- 界面元素事件之处理程序 -------------------
        private 每当点击底部内容栏默认内容中的按钮甲之后 (): void
        private 每当点击底部内容栏默认内容中的按钮乙之后 (): void
    }

    namespace Wlc任意两列间转移条目_两列之间之竖栏_默认形态 {
        type 范_事件名称 = (
            | '已点击按钮甲'
            | '已点击按钮乙'
        );
    }





    class Wlc任意两列间转移条目_主表条目_默认形态 extends Vue {
        // -------- 外来数据 --------------------------------
        public readonly 条目?: 范_内用格式之条目
        public readonly 所属列已禁止交互?: boolean
    }





    class Wlc任意两列间转移条目_现成实用的双列 extends Vue {
        // -------- 自动接驳数据（ 即视为 v-model 的数据 ） ----
        public readonly 乙列所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

        // -------- 外来数据 --------------------------------
        public readonly 应全面禁止交互?: boolean
        public readonly 无须总标题栏?: boolean
        public readonly 无须中央列?: boolean
        public readonly 无须底部内容栏?: boolean

        public readonly 甲列之称谓?: string
        public readonly 乙列之称谓?: string
        public readonly 甲列之特征样式类名之配置?: 泛范_界面元素之样式类名之配置
        public readonly 乙列之特征样式类名之配置?: 泛范_界面元素之样式类名之配置

        public readonly 界面措辞_中央竖栏_内建按钮甲?: string
        public readonly 界面措辞_中央竖栏_内建按钮乙?: string
        public readonly 界面措辞_底部内容栏默认内容_按钮甲?: string
        public readonly 界面措辞_底部内容栏默认内容_按钮乙?: string
        public readonly 各列均无需底部的说明书功能区?: boolean

        public readonly 双列全部条目之总列表?: 范_基础条目之列表
        public readonly 单列允许列示的条目数之上限?: number
        public readonly 各列新增条目之插入规则?: 范_各列新增条目之插入规则
        public readonly 各列条目排序之函数?: 范_各列条目排序之函数

        public readonly 甲列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表
        public readonly 乙列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表
        public readonly 甲列初始的用以过滤条目之配置?: string | RegExp
        public readonly 乙列初始的用以过滤条目之配置?: string | RegExp

        public readonly vue部件之定义_订制的主表条目?: null | 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串

        public readonly 应在控制台输出详尽的调试信息?: boolean

        // -------- 公开行为 --------------------------------
        public 将甲列选中的条目迁移至乙列 (调用者?: Vue): void
        public 将乙列选中的条目迁移至甲列 (调用者?: Vue): void

        // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

        // -------- 私有数据 --------------------------------
        private 日志前缀: string
        private 所有条目之列表之去重后的缓存版本: null | 范_基础条目之列表
        private 甲列之数据集: Wlc任意两列间转移条目_现成实用的双列.范_单列之内部数据集
        private 乙列之数据集: Wlc任意两列间转移条目_现成实用的双列.范_单列之内部数据集
        private 将所有候选条目分配到左右两列_之期待: null | Promise<void>
        private 将所有候选条目分配到左右两列_之期待之原因: string

        // -------- 衍生数据 --------------------------------
        private get 甲列之称谓_最终采纳值 (): string
        private get 乙列之称谓_最终采纳值 (): string
        private get 用于各界面皿之状态集 (): 范_状态汇总数据
        private get 界面措辞_底部内容栏默认内容_按钮甲_最终采纳值 (): string
        private get 界面措辞_底部内容栏默认内容_按钮乙_最终采纳值 (): string

        // -------- @Watch 数据变动之处理程序 ----------------
        private 每当双列全部条目之总列表变动后 (新值?: 范_基础条目之列表): void
        private 每当乙列所有条目之唯一标识之列表变动后 (新值?: 范_条目之唯一标识之列表): void

        // -------- 私有行为 -------------------------------
        private 接受外界给出的甲乙两列勾选条目之配置 (): void
        private 将所有候选条目分配到左右两列 (本次原因: string): Promise<void>
        private 将某列选中的条目迁移至对方列 (起列?: Wlc任意两列间转移条目_现成实用的双列.范_单列之内部数据集): void
        // - - - - - - - - - - - - - - - - - - - - - - -
        private 发布事件_条目之分布已变动 (): void
        private 发布事件_已出错 (错误之记载或报文: Error | string): void

        // -------- 界面元素事件之处理程序 -------------------
        private 每当点击底部内容栏默认内容中的按钮甲之后 (): void
        private 每当点击底部内容栏默认内容中的按钮乙之后 (): void
        // private 每当键盘按键松开时 (键盘事件之记载: KeyboardEvent): void

        // -------- 生命周期钩子 ----------------------------
        private beforeMount (): void
    }

    namespace Wlc任意两列间转移条目_现成实用的双列 {
        type 泛范_实例可绑定之属性集<范_实际条目 extends 范_基础条目> = {
            应全面禁止交互?: boolean;
            无须总标题栏?: boolean;
            无须中央列之功能?: boolean;
            无须底部内容栏?: boolean;

            甲列之称谓?: string;
            乙列之称谓?: string;
            甲列之特征样式类名之配置?: 泛范_界面元素之样式类名之配置;
            乙列之特征样式类名之配置?: 泛范_界面元素之样式类名之配置;

            界面措辞_中央竖栏_内建按钮甲?: string;
            界面措辞_中央竖栏_内建按钮乙?: string;
            界面措辞_底部内容栏默认内容_按钮甲?: string;
            界面措辞_底部内容栏默认内容_按钮乙?: string;
            各列均无需底部的说明书功能区?: boolean;

            双列全部条目之总列表?: 范_实际条目[];
            单列允许列示的条目数之上限?: number;
            各列新增条目之插入规则?: 范_各列新增条目之插入规则;
            各列条目排序之函数?: 范_各列条目排序之函数;

            甲列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表;
            乙列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表;
            甲列初始的用以过滤条目之配置?: string | RegExp;
            乙列初始的用以过滤条目之配置?: string | RegExp;

            vue部件之定义_订制的主表条目?: null | 范_Vue动态部件之Is属性可接受的数据_但不可为部件名称字符串;

            应在控制台输出详尽的调试信息?: boolean;
        };

        type 范_事件名称 = (
            | '条目之分布已变动'
            | '已出错'
        );

        type 范_单列之内部数据集 = {
            所有条目之列表: 范_内用格式之条目之列表;
            当下选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表;
            当下正在通过视觉强调动画引导用户: boolean;
        };
    }
}
