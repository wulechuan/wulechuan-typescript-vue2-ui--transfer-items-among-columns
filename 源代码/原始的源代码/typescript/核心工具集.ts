type 范_内用格式之条目之列表 = Wlc任意两列互换数据.范_内用格式之条目之列表





export function 将某列选中的条目迁移至另一列 (
    迁移前起列所有条目之列表?: 范_内用格式之条目之列表,
    迁移前迄列所有条目之列表?: 范_内用格式之条目之列表
): null | {
    迁移后起列所有条目之列表: 范_内用格式之条目之列表;
    迁移后迄列所有条目之列表: 范_内用格式之条目之列表;
} {
    if (!Array.isArray(迁移前起列所有条目之列表) || !Array.isArray(迁移前迄列所有条目之列表)) { return null }

    const 迁移后起列所有条目之列表: 范_内用格式之条目之列表 = []
    const 迁移后迄列所有条目之列表: 范_内用格式之条目之列表 = [
        ...迁移前迄列所有条目之列表,
    ]

    迁移前起列所有条目之列表.forEach(条目 => {
        if (!条目.已禁止选择 && 条目.已选中) {
            迁移后迄列所有条目之列表.push(条目)
        } else {
            迁移后起列所有条目之列表.push(条目)
        }
    })

    return {
        迁移后起列所有条目之列表,
        迁移后迄列所有条目之列表,
    }
}
