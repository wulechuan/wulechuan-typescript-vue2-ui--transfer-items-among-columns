import type Wlc任意两列间转移条目 from '@wulechuan/vue2-ui--transfer-items-among-columns'

export interface 范_任意两列间转移条目_实际条目 extends Wlc任意两列间转移条目.范_基础条目 {
    数据?: {
        描述?: string | string[];
        描述已呈现?: boolean;
    };
}

export type 范_任意两列间转移条目_实际条目之列表 = Array<范_任意两列间转移条目_实际条目>

export const 一切可能的条目之列表: 范_任意两列间转移条目_实际条目之列表 = [
    {
        唯一标识: '蠃鱼',
        在界面中的称谓: '蠃（luǒ）鱼',
        数据: {
            描述: [
                '邽山，蒙水出焉，南流注于洋水，其中多黄贝；蠃鱼，鱼身而鸟翼，音如鸳鸯，见则其邑大水。',
                '一种长着鱼身，却有鸟翅膀的异兽，能发出像鸳鸯一样的鸟叫。它在哪里出现就会在哪里带来水灾。',
            ],
        },
    },

    {
        唯一标识: '蠃鱼',
        在界面中的称谓: '蠃（luǒ）鱼（系故意重复之条目）',
        数据: {
            描述: [
                '邽山，蒙水出焉，南流注于洋水，其中多黄贝；蠃鱼，鱼身而鸟翼，音如鸳鸯，见则其邑大水。',
                '一种长着鱼身，却有鸟翅膀的异兽，能发出像鸳鸯一样的鸟叫。它在哪里出现就会在哪里带来水灾。',
            ],
        },
    },

    {
        唯一标识: '三足乌',
        在界面中的称谓: '三足乌',
        数据: {
            描述: [
                '居于日中，有三足。又称三足金乌。亦称“踆乌”。',
                '其形象是一只黑乌鸦蹲居在金光闪烁的红日中央因而常称为金乌，主要是侍奉西王母，是汉族神话中太阳之灵。神话中说，太阳里有三足乌鸦，古代人们就把金乌作为太阳的别名。',
            ],
        },
    },

    {
        唯一标识: '鲲鹏',
        在界面中的称谓: '鲲（kūn）鹏（péng）',
        数据: {
            描述: [
                '鲲鹏之名，最早出现于《庄子·逍遥游》，其中有鲲化为鹏的说法。',
                '“北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。”',
            ],
        },
    },

    {
        唯一标识: '称谓超长的条目',
        在界面中的称谓: '这是一个称谓超长的条目，其称谓如你所见奇长无比，好似一条神龙盘旋在云霄中',
        数据: { 描述: '一个用于测试排版功能之条目。' },
    },

    {
        唯一标识: '穷奇',
        在界面中的称谓: '穷奇',
        数据: {
            描述: [
                '《山海经·海内北经》记载：穷奇外貌像老虎，大小如同牛般，长有一双翅膀。传说穷奇性情凶狠，喜欢吃人。不忠不信，不听好人之言，专门听信别人的坏话。是西方天帝少昊的后代，因毁信恶忠，崇饰恶言，被舜流放，迁于四裔，以御魑魅。',
                '和混沌、梼杌、饕餮并称为远古“四大凶兽” 。',
            ],
        },
    },

    {
        唯一标识: '饕餮',
        在界面中的称谓: '饕（tāo）餮（tiè）',
        数据: {
            描述: [
                '别名老饕（tāo）、狍（páo）鸮（xiāo），是中国古代神话传说中的一种凶恶贪食的野兽，四大凶兽之一。',
                '据《山海经·北次二经》记载：饕餮其形状如羊身人面，其目在腋下，虎齿人爪，其音如婴儿。是贪欲的象征，常用来形容贪食或贪婪的人。',
            ],
        },
    },

    {
        唯一标识: '蜚',
        在界面中的称谓: '蜚（fēi）',
        数据: {
            描述: [
                '《山海经·卷四·东山经·东次四经》记载：“又东二百里，曰太山，上多金玉、桢木。有兽焉，其状如牛而白首，一目而蛇尾，其名曰蜚。行水则竭，行草则死，见则天下大疫。” ',
                '晋代郭璞《山海经图赞》：“蜚之为名，体似无害，所绎枯竭，其干谯厉。” 当“蜚”进入水中时，水源会立即干涸；当它进入草丛时，草会立即枯死。',
            ],
        },
    },

    {
        唯一标识: '天狗',
        在界面中的称谓: '天狗',
        数据: {
            描述: [
                '中国古代民间传说中的一种动物。',
                '最早记载于《山海经》中，原文是：“又西三百里，曰阴山。浊浴之水出焉，而南流于番泽。其中多文贝，有兽焉，曰天狗，其状如狸而白首，其音如榴榴，可以御凶。”',
                '如文中所述，天狗是种像野猫而头部白色的动物，并是御凶的吉兽，很可能是某种古代哺乳类动物，是真实存在过的。但后来演变成用来形容彗星和流星，古人将天空奔星视为大不吉，所以天狗也变成了凶星的称谓。',
                '《史记·天官》载：“天狗状如大奔星，有声，其下止地类狗，所堕及炎火，望之如火光，炎炎冲天。”',
            ],
        },
    },

    {
        唯一标识: '狰',
        在界面中的称谓: '狰',
        数据: {
            描述: [
                '《山海经·西山一经》又西二百八十里，曰章莪（é）之山，无草木，多瑶碧。所为甚怪。有兽焉，其状如赤豹，五尾一角，其音如击石，其名如“狰”。',
            ],
        },
    },

    {
        唯一标识: '蠃鱼',
        在界面中的称谓: '蠃（luǒ）鱼（系故意重复之条目）',
        数据: {
            描述: [
                '邽山，蒙水出焉，南流注于洋水，其中多黄贝；蠃鱼，鱼身而鸟翼，音如鸳鸯，见则其邑大水。',
                '一种长着鱼身，却有鸟翅膀的异兽，能发出像鸳鸯一样的鸟叫。它在哪里出现就会在哪里带来水灾。',
            ],
        },
    },

    {
        唯一标识: '肥遗',
        在界面中的称谓: '肥遗',
        数据: {
            描述: [
                '据《山海经》记载，共有三种，两蛇一鸟。',
                '《山海经·西山经》：“又西六十里，曰太华之山，削成而四方，其高五千仞，其广十里，鸟兽莫居。有蛇焉，名曰肥甥（wèi），六足四翼，见则天下大旱。”',
                '《山海经·北山经》：“又北百八十里，曰浑夕之山，无草木，多铜玉。嚣水出焉，而西北流注于海。有蛇一首两身，名曰肥遗，见则其国大旱。”',
                '《山海经·西山经》：“又西七十里，曰英山，其上多杻橿，其阴多铁，其阳多赤金。禺水出焉，北流注于招水，其中多䰷鱼，其状如鳖，其音如羊。其阳多箭䉋，兽多㸲牛、羬羊。有鸟焉，其状如鹑，黄身而赤喙，其名曰肥遗，食之已疠，可以杀虫。”',
            ],
        },
        已禁止选择: true,
    },

    {
        唯一标识: '蛊雕',
        在界面中的称谓: '蛊（gǔ）雕',
        数据: {
            描述: [
                '蛊雕是一种似鸟非鸟的食人怪兽。',
                '据《山海经·南山经》记载：“又东五百里，曰鹿吴之山，上无草木，多金石。泽更之水出焉，而南流注于滂水，水有兽焉，名曰蛊雕，其状如雕而有角，其音如婴儿之音，是食人。”',
            ],
        },
    },

    {
        唯一标识: '九尾狐',
        在界面中的称谓: '九尾狐',
        数据: {
            描述: [
                '据《山海经》记载：九尾狐住在青丘国，有四只脚和九只尾巴，声音像婴儿，能吃人。',
            ],
        },
    },

    {
        唯一标识: '九婴',
        在界面中的称谓: '九婴',
        数据: {
            描述: [
                '九婴是古代中国神话传说中的凶兽之一。',
                '出自《淮南子·本经训》。它是水火之怪，能喷水吐火，它的叫声如婴儿啼哭，有九头，故称九婴。尧时出，作害人间，被羿射杀于北狄凶水之中。',
            ],
        },
        已禁止选择: true,
    },

    {
        唯一标识: '旋龟',
        在界面中的称谓: '旋龟',
        数据: {
            描述: [
                '黑而赤的龟。',
                '《山海经》：怪水出焉，而东流注于宪翼之水。其中多玄龟，其状如龟而鸟首虺（huǐ ）尾，其名曰旋龟，其音如判木，佩之不聋，可以为底。',
            ],
        },
    },

    {
        唯一标识: '夫诸',
        在界面中的称谓: '夫诸',
        数据: {
            描述: [
                '',
            ],
        },
        已禁止选择: true,
    },

    {
        唯一标识: '毕方',
        在界面中的称谓: '毕方',
        数据: {
            描述: [
                '《山海经·西山经》：“有鸟焉，其状如鹤，一足，赤文青质而白喙，名曰毕方，其鸣自叫也，见则其邑有讹火。”',
            ],
        },
    },

    {
        唯一标识: '青龙',
        在界面中的称谓: '青龙',
        数据: {
            描述: [
                '青龙，又称【苍龙】、【孟章】，是中国古代神话传说中的形象，为“天之四灵”之一的东方之神，对应“四象”中的“东方七宿（xiù）”。',
                '青龙起初是指东方龙状的星宿名称，起源于上古星宿崇拜。在中国二十八星宿中，一开始是因为“东方七星宿”的排列形状像龙，因此青龙从先秦以来成为象征东方七宿与太昊的东方之神。在五行中属木，在八卦中对应震与巽，代表四象中的“少阳”、四季中的“春季”，同时也是天之东陆。在古人将东七宿组合想象成为龙形象后，又按阴阳五行给五方配色之说，因位于东方主木，代表色为“青”，故名“青龙”，从而衍生成具象化的兽类形态，呈为青色（苍色）之龙。',
                '根据对殷墟出土卜辞中天象资料的整理与研究的考证发现，在殷商早期的甲骨文上已有青龙等四象的形象产生。随后西周早期也有记载青龙形象的墓葬文物出土，但当时只有青（苍）龙、【白虎】、【朱雀】、【神鹿】四象，后世“【玄武】”一象还未成型。',
            ],
        },
    },

    {
        唯一标识: '白虎',
        在界面中的称谓: '白虎',
        数据: {
            描述: [
                '中国古代神话中的天之四灵之一，西方之神。后为道教所信奉，同青龙、朱雀、玄武合称四方四神。',
                '《山海经·西次四经》：“又西二百二十里，曰鸟鼠同穴之山，其上多白虎、白玉。渭水出焉，而东流注于河。”',
            ],
        },
    },

    {
        唯一标识: '朱雀',
        在界面中的称谓: '朱雀',
        数据: {
            描述: [
                '是中国古代神话中的天之四灵之一。源于远古星宿崇拜，是代表炎帝与“南方七宿（xiù）”的南方之神，于八卦为离，于五行主火，象征四象中的老阳，四季中的夏季，同时也是天之南陆。',
                '南方属火，朱雀等鸟的图腾在古代神话中往往属于太阳崇拜。',
                '殷商早期，甲骨文上已有朱雀等四象的形象产生。最早的记载于殷墟出土的甲骨文：“丁巳卜，贞帝朱鸟，三羊三豚三犬”，意为“于丁巳日占卜，要求帝王祭祀朱鸟，献祭三头羊三头猪三条狗”。',
            ],
        },
    },

    {
        唯一标识: '玄武',
        在界面中的称谓: '玄武',
        数据: {
            描述: [
                '中国古代神话中的天之四灵之一，又名【龟蛇】、【玄冥】。源于远古星宿崇拜，是指二十八宿按东南西北分为四象中的北方玄武七宿。',
                '【四象】在中国传统文化中指【青龙】、【白虎】、【朱雀】、【玄武】，分别代表东西南北四个方向。北方玄武于八卦为坎，于五行主水，象征四象中的老阴，四季中的冬季，同时也是天之北陆。',
            ],
        },
    },

    {
        唯一标识: '比翼鸟',
        在界面中的称谓: '比翼鸟',
        数据: {
            描述: [
                '又名【鹣（jiān）鹣】、【蛮（mán）蛮】。此鸟仅一目一翼，雌雄须并翼飞行，故常比喻恩爱夫妻，亦比喻情深谊厚、形影不离的朋友。',
                '《山海经·海外南经》：“比翼鸟在其东，其为鸟青、赤，两鸟比翼。一曰在南山东。”',
                '又《西山经》：“崇吾之山有鸟焉，其状如凫（fú），而一翼一目，相得乃飞，名曰蛮蛮，见则天下大水。”',
                '《尔雅·释地》：“南方有比翼鸟焉，不比不飞，其名谓之鹣鹣。”郭璞注：“似凫，青赤色。”',
            ],
        },
    },

    {
        唯一标识: '梼杌',
        在界面中的称谓: '梼（táo）杌（wù）',
        数据: {
            描述: [
                '别名傲狠，中国神话中上古时期的四凶之一。',
                '据《神异经》记载，梼杌是生活在偏远西方的怪物，它体格像老虎而毛类犬，毛很长，脸有点像人，腿有点像老虎，嘴巴长有像野猪一样的獠牙，尾长丈八尺，在西方称霸，能斗不退。',
                '而“梼杌”，较早见于《左传·文公十八年》：颛顼有不才子，不可教训，不知话言，告之则顽，舍之则嚚，傲狠明德，以乱天常，天下之民谓之梼杌。',
            ],
        },
    },

    {
        唯一标识: '白泽',
        在界面中的称谓: '白泽',
        数据: {
            描述: [
                '白泽，中国古代神话中的瑞兽。能言语，通万物之情，知鬼神之事，“王者有德”才出现，能辟除人间一切邪气。',
                '《元史》记载：白泽兽虎首朱发而有角，龙身。',
                '《明集礼》记载：白泽为龙首绿发戴角，四足为飞走状。',
                '唐至清，“白泽”是皇帝仪仗旗队中图识之一。',
            ],
        },
    },

    {
        唯一标识: '獬豸',
        在界面中的称谓: '獬（xiè）豸（zhì）',
        数据: {
            描述: [
                '又名【獬廌（zhì）】、【解豸】、【神羊】。俗称“独角兽”。',
                '中国古代神话传说中的神兽，体形大者如牛，小者如羊，类似麒麟，全身长着浓密黝黑的毛，双目明亮有神，额上通常长一角。',
                '獬豸拥有很高的智慧，懂人言知人性。它怒目圆睁，能辨是非曲直，能识善恶忠奸，发现奸邪的官员，就用角把他触倒，然后吃下肚子。又有【神羊】之称。它是勇猛、公正的象征，是司法“正大光明”“清平公正”“光明天下”的象征。',
            ],
        },
    },

    {
        唯一标识: '狴犴',
        在界面中的称谓: '狴（bì）犴（àn）',
        数据: {
            描述: [
                '又名【宪章】，中国古代神话传说中的神兽。为鳞虫之长瑞兽龙之第七子。形似虎，平生好讼，却又有威力。狱门上部那虎头形的装饰便是其图像。',
                '狴犴既是牢狱的象征，又是黎民百姓的守护神。',
            ],
        },
    },

    {
        唯一标识: '冉遗',
        在界面中的称谓: '冉（rǎn）遗',
        数据: {
            描述: [
                '古代中国神话传说中的怪鱼。',
                '《山海经》：“英鞮之山，涴水出焉，而北流注于陵羊之泽。是多冉遗之鱼，鱼身蛇首六足，其目如马耳，食之使人辟邪安眠，可以御凶”。',
            ],
        },
    },

    {
        唯一标识: '夔牛',
        在界面中的称谓: '夔（kuí）牛',
        数据: {
            描述: [
                '《山海经·大荒东经》：“状如牛，苍身而无角，一足，出入水则必有风雨，其光如日月，其声如雷，其名曰夔”。',
                '但更多的古籍中则说夔是蛇状怪物。“夔，神魅也，如龙一足。”',
                '《六帖》：“夔，一足，踔而行。”',
            ],
        },
    },

    {
        唯一标识: '山膏',
        在界面中的称谓: '山膏（huān）',
        数据: {
            描述: [
                '《山海经·中山经》：“又东二十里，曰苦山。有兽焉，名曰山膏，其状如逐（豚），赤若丹火，善詈（lì）。其上有木焉，名曰黄棘，黄华而员叶，其实如兰，服之不字。有草焉，员叶而无茎，赤华而不实，名曰无条，服之不瘿（yǐng）。”',
            ],
        },
    },

    {
        唯一标识: '騊駼',
        在界面中的称谓: '騊（táo）駼（tú）',
        数据: {
            描述: [
                '騊駼为北方产的一种毛色以青为主的野马，一直是为历代名马，极得到人们的重视。《山海经·海外北经卷八》、《史记》、《逸周书·王会》等都有记载。',
                '《山海经》：“ 北海内有兽，状如马，名騊駼。” ',
            ],
        },
    },

    {
        唯一标识: '陆吾',
        在界面中的称谓: '陆吾',
        数据: {
            描述: [
                '《山海经·西山经》：“西南四百里，曰昆仑之丘，是实惟帝之下都，神陆吾司之。其神状虎身而九尾，人面而虎爪；是神也，司天之九部及帝之囿时。”',
                '郭璞注： “即肩吾也。',
            ],
        },
    },

    {
        唯一标识: '蛩蛩',
        在界面中的称谓: '蛩（qiónɡ）蛩（qiónɡ）',
        数据: {
            描述: [
                '传说中的一种异兽。 怀忧貌。',
                '《山海经·海外北经》：“﹝北海﹞有素兽焉，状如马，名曰蛩蛩。” 郭璞注：“即蛩蛩钜（jù）虚也。”',
            ],
        },
    },

    {
        唯一标识: '乘黄',
        在界面中的称谓: '乘（shèng）黄',
        数据: {
            描述: [
                '传说中的神马。泛指良马。',
            ],
        },
    },

    {
        唯一标识: '重明鸟',
        在界面中的称谓: '重明鸟',
        数据: {
            描述: [
                '中国古代神话传说中的神鸟。其形似鸡，鸣声如凤，此鸟两目都有两个眼珠，所以叫作重明鸟，亦叫【重睛鸟】。',
                '它的气力很大，能够搏逐猛兽。能辟除猛兽妖物等灾害。在中国民间新年风俗中，贴画鸡于门窗上，实即重明鸟之遗意。',
            ],
        },
    },

    {
        唯一标识: '凤凰',
        在界面中的称谓: '凤凰',
        数据: {
            描述: [
                '',
            ],
        },
    },

    {
        唯一标识: '赑屃',
        在界面中的称谓: '赑（bì）屃（xì）',
        数据: {
            描述: [
                '又名【霸下】、【鳌（áo）】、【龟趺（fū）】、【填下】、【龙龟】等。是古代汉族神话传说中龙之九子之一，形似龟，好负重，长年累月地驮载着石碑。',
                '赑屃一方面为实用之物，用来做碑座，俗称“神龟驼碑”。另一方面，又具有非常重要的文化意义。它的象征以“长寿吉祥”为依据，并带有地位级别、图腾崇拜、巫术崇拜等方面的涵义。',
            ],
        },
    },

    {
        唯一标识: '混沌',
        在界面中的称谓: '混沌',
        数据: {
            描述: [
                '',
            ],
        },
    },

    {
        唯一标识: '麒麟',
        在界面中的称谓: '麒麟',
        数据: {
            描述: [
                '',
            ],
        },
    },

    {
        唯一标识: '窫窳',
        在界面中的称谓: '窫（yà）窳（yǔ）',
        数据: {
            描述: [
                '又名【猰（yà）貐（yǔ）】。',
                '《山海经·海内南经》：“窫窳龙首，居弱水中，在狌狌知人名之西，其状如龙首，食人。”',
                '《山海经·北山经·北次一经》：“又北二百里，曰少咸之山，无草木，多青碧。有兽焉，其状如牛，而赤身、人面、马足，名曰窫窳，其音如婴儿，是食人。”',
                '《山海经·海内西经》：“贰负之臣曰危，危与贰负杀窫窳。”',
                '《山海经·海内西经》：“窫窳者，蛇身人面，贰负臣所杀也。”',
            ],
        },
    },

    {
        唯一标识: '魳魳',
        在界面中的称谓: '魳（zā）魳鱼',
        数据: {
            描述: [
                '《山海经·北山经·北次一经》：“敦水出焉，东流注于雁门之水，其中多魳（zā）魳之鱼。食之杀人。”',
            ],
        },
    },

    {
        唯一标识: '横公鱼',
        在界面中的称谓: '横公鱼',
        数据: {
            描述: [
                '古代中国神话中的怪鱼。',
                '《山海经·大荒北经》：“生于石湖，此湖不冻。长七八尺，形如鲤而赤，昼在水中，夜化为人。刺之不入，煮之不死，以乌梅二枚煮之则死，食之可去邪病。”',
                '横公鱼到了夜晚，跳到岸上，脱掉厚重的外壳，其样貌有点像人类。所以有了“夜化为人”的说法。',
            ],
        },
    },

    {
        唯一标识: '英招',
        在界面中的称谓: '英招（sháo）',
        数据: {
            描述: [
                '《山海经·西山经》：“又西三百二十里，曰槐江之山，丘时之水出焉，而北流注于泑水。其中多蠃母，其上多肯雄黄，多藏琅歼、黄金、玉，其陨多丹粟，其陲多采黄金银。实惟帝之平圃，神英招司之，其状马身而人面，虎文而舄翼，徇于四海，其音如榴。”',
                '郭璞注：“即玄圃（pǔ）也。司，主也。招，音韶（sháo）。”',
            ],
        },
    },

    {
        唯一标识: '巴蛇',
        在界面中的称谓: '巴蛇',
        数据: {
            描述: [
                '又名【修蛇】。中国古代神话传说中的巨蛇。',
                '《山海经·海内经》：“西南有巴国，又有朱卷之国，有黑蛇，青首，食象。”郭璞注：“即巴蛇也。”',
                '《山海经·海内南经》：“巴蛇食象，三岁而出其骨，君子服之，无心腹之疾。其为蛇，青黄赤黑。一曰黑蛇，青首，在犀牛西。”',
            ],
        },
    },

    {
        唯一标识: '应龙',
        在界面中的称谓: '应（yìng）龙',
        数据: {
            描述: [
                '别名【飞龙】、【应时之龙】、【应德之龙】、【庚辰】、【黄龙】、【元始黄龙】、【天元应龙】、【苍晖应龙】、【吉】、【老龙吉】。',
                '《山海经·大荒东经》：“大荒东北隅中，有山名曰凶犁土丘。应龙处南极，杀蚩尤与夸父，不得复上，故下数旱，旱而为应龙之状，乃得大雨”。',
                '应龙又称【飞龙】、【黄龙】。是祖龙，更是真龙的标准。只有如应龙有翼，才可称真龙。应龙生【凤凰】、【建马】，建马生【麒麟】，而凤凰生一切鸟，麒麟生一切兽。应龙即为世间鸟兽共祖。',
                '应龙是中央七宿轩辕星之神，更是天之后妃、太一之妃，号称女王星，与【青龙】、【白虎】、【朱雀】、【玄武】并列为五星天官。司掌风雷、雷雨，天下水仙、水神、河伯之属，司四季、司中岳、司中土、司黄河、江、汉、淮、济之水、司黄帝之子孙、司倮虫三百六十。',

            ],
        },
    },

    {
        唯一标识: '烛龙',
        在界面中的称谓: '烛龙',
        数据: {
            描述: [
                '又名【烛阴】、【烛九阴】、【逴（chuō）龙】、【火精】。',
                '《山海经·大荒北经》：“西北海之外，赤水之北，有章尾山。有神，人面蛇身而赤，直目正乘，其瞑乃晦，其视乃明，不食不寝不息，风雨是谒（yè）。是烛九阴，是烛龙。”',
                '西北海的外面，赤水的北边，有一座章尾山。有一位神，长着人一样的脸，蛇一样的身子，浑身红色，眼睛竖着长，它闭上眼睛，天下就变成了黑夜；睁开眼睛，天下就成了白天。它不吃东西，不睡觉，也不呼吸，能请来风雨。它能照亮幽渺之地，这就是烛龙。',
                '《山海经·海外北经》：“钟山之神，名曰烛阴，视为昼，瞑为夜，吹为冬，呼为夏，不饮，不食，不息，息为风。身长千里。在无䏿（qǐ ）之东。其为物，人面，蛇身，赤色，居钟山下。”',
                '钟山的山神，名叫烛阴，他睁开眼睛便是白昼，闭上眼睛便是黑夜，一吹气便是寒冬，一呼气便是炎夏，不喝水，不吃食物，不呼吸，一呼吸就生成风，身子有一千里长。这位烛阴神在无启国的东面。他长着人一样的脸，蛇一样的身子，浑身红色，居住在钟山下。',
                '郭璞注“烛阴”时认为烛龙与烛阴乃是同一物：“烛龙也，是烛九阴，因名云。”',
            ],
        },
    },

    {
        唯一标识: '毛犊',
        在界面中的称谓: '毛犊',
        数据: {
            描述: [
                '传说中的异兽名。',
                '《淮南子·墬（dì）形训》：“毛犊生【应（yìng）龙】，应龙生【建马】，建马生【麒麟】，麒麟生庶兽，凡毛者生於庶兽。”',
            ],
        },
    },

    {
        唯一标识: '建马',
        在界面中的称谓: '建马',
        数据: {
            描述: [
                '传说中的异兽名。',
                '《淮南子·墬（dì）形训》：“【毛犊】生【应（yìng）龙】，应龙生建马，建马生【麒麟】，麒麟生庶兽，凡毛者生於庶兽。”',
            ],
        },
    },

    {
        唯一标识: '貔貅',
        在界面中的称谓: '貔（pí）貅（xiū）',
        数据: {
            描述: [
                '龙的第九子，公的称貔，母的叫貅。别称【辟邪】、【天禄】、【百解】。独角称为【天鹿】、【天禄】，两角称为【辟邪】。俗称“貔大虎”。',
                '《山海经》： “辟邪之兽，来自海东神兽，能知人之忠佞（nìng）不直者，触而淡杀之。”',
                '《史记·五帝本纪》记载：貔貅是有六只脚的猛兽。',
                '《中洲记》： “聚窟洲有辟邪、天鹿（天禄）。”',
            ],
        },
    },

    {
        唯一标识: '天马',
        在界面中的称谓: '天马',
        数据: {
            描述: [
                '《山海经·北山经》：“又东北二百里，曰马成之山，其上多文石，其阴多金玉，有兽焉，其状如白犬而黑头，见人则飞，其名曰天马。”（马成山上有天马，样子像白狗，头是黑的，会飞。）',
            ],
        },
    },

    {
        唯一标识: '鱼妇',
        在界面中的称谓: '鱼妇',
        数据: {
            描述: [
                '《山海经》：“有鱼偏枯，名曰鱼妇。颛顼死即复苏。风道北来，天及大水泉，蛇乃化为鱼，是为鱼妇。颛顼死即复苏。”',
                '有一种鱼，半身偏枯，一半是人形，一半是鱼体，名叫鱼妇。据说是颛顼死而复苏变化成的。颛顼是昌意之子，在他死去的时候，刚巧大风从北面吹来，海水被风吹得奔流而出，蛇变成了鱼。已经死去的颛顼便趁着蛇即将变成鱼而未定型的时候，托体到鱼的躯体中，为此死而复生。后来人们就把这种和颛顼结合在一起的鱼叫作鱼妇。',
            ],
        },
    },

    {
        唯一标识: '当扈',
        在界面中的称谓: '当（dāng）扈（hù）',
        数据: {
            描述: [
                '当扈是一种怪鸟，样子像传说中雉。当扈图有二形：其一以须毛飞，其二似雉。',
                '郭璞《图赞》：“鸟飞以翼，当扈则须。废多任少，沛（pèi）然有余。轮运于毂（gū 或 gǔ），至用在无。”',
            ],
        },
    },

    {
        唯一标识: '青鸟',
        在界面中的称谓: '青鸟',
        数据: {
            描述: [
                '',
            ],
        },
    },

    {
        唯一标识: '化蛇',
        在界面中的称谓: '化蛇',
        数据: {
            描述: [
                '',
            ],
        },
    },

    {
        唯一标识: '朱厌',
        在界面中的称谓: '朱厌',
        数据: {
            描述: [
                '《山海经·西山经》：“又西四百里，曰小次之山，其上多白玉，其下多赤铜。有兽焉，其状如猿，而白首赤足，名曰朱厌，见则大兵。”',
            ],
        },
    },

    {
        唯一标识: '甪端',
        在界面中的称谓: '甪（lù）端',
        数据: {
            描述: [
                '甪（lù）在《辞海》里的释义：“角”字的变体与异读。故该兽又名【角（jiǎo）端】。',
                '一种中国神话传说中的神兽。与【麒麟】相似，头上一角。甪端能够日行一万八千里，通四方语言，而且只陪伴明君，专为英明帝王传书护驾。寄寓了中国民众的美好愿望和祈（qí）盼，期盼国泰民安、生活富裕、人世昌隆、人寿年丰。',
            ],
        },
    },

    {
        唯一标识: '当康',
        在界面中的称谓: '当康',
        数据: {
            描述: [
                '当康又称【牙豚】，是中国古代神话传说中的神兽之一，是一种兆丰穰（ráng）的瑞兽。',
                '《山海经·东次四经》:“钦山，有兽焉。其状如豚而有牙，其名曰当康，其鸣自叫，见则天下大穰。',
            ],
        },
    },

    {
        唯一标识: '赤鱬',
        在界面中的称谓: '赤鱬（rú）',
        数据: {
            描述: [
                '赤：空净无物；蠕：通“需”，柔软。',
                '《山海经·南山经》：“英水出焉，南流注于即翼之泽。其中多赤鱬，其状如鱼而人面，其音如鸳鸯，食之不疥。”',
            ],
        },
    },

    {
        唯一标识: '兕',
        在界面中的称谓: '兕（sì）',
        数据: {
            描述: [
                '上古瑞兽，状如犀牛而不是犀牛（雷兽科），苍黑（全身呈现青黑色），板角（就是独角兽那样的犄角）。',
                '兕中最著名的是【板角青牛】，太上老君的坐骑。',
            ],
        },
    },
]
