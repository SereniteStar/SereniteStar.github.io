const customLyrics = [
    // 天黑黑
    "天黑黑，欲落雨。",
    "突然期待，下起安静的雨。",
    "我相信，一切都会平息。",
    "我现在，好想回家去。",
    // 我要的幸福
    "幸福，我要的幸福，渐渐清楚。",
    "幸福，我要的幸福，在不远处。",
    "生活像等待，创作的黏土。",
    "生活是自己，选择的衣裳。",
    // 坏天气
    "我们淋着大雨，不知何时才能放晴。",
    "逃开了彼此，雨也不会停。",
    // 开始懂了
    "相信你只是怕伤害我，不是骗我。",
    "开始懂了，快乐是选择。",
    // 相信
    "虽然今天天很蓝，而云很白，风很凉。",
    "我曾经看见困难，变得胆小，不够勇敢。",
    "但还是要相信，相信感觉，相信简单。",
    // 星期一天气晴我离开你
    "星期一，天气晴，我离开你。",
    // 眼神
    "有时候，爱是一种眼神。",
    "有你在什么都有可能，因为彼此信任。",
    // 我不难过
    "我不难过，这不算什么。",
    "我真的懂，你不是喜新厌旧。",
    "不要再说，或许这是最好的结果。",
    // 遇见
    "向左，向右，向前看。",
    "阴天，傍晚，车窗外。",
    "我排着队，拿着爱的号码牌。",
    "我往前飞，飞过一片时间海。",
    "我遇见你，是最美丽的意外。",
    "总有一天，我的谜底会揭开。",
    // 我的爱
    "我会在沿海地带，等着潮汐更改。",
    // 眼泪成诗
    "字不醉人人自醉，因为回忆总是美。",
    // 隐形人
    "多想化成隐形的人，掩饰我伤痕。",
    // 逆光
    "有一束光，那瞬间，是什么痛的刺眼。",
    // 咕叽咕叽
    "我们都好，我们都是鸟。",
    // 我怀念的
    "我怀念的，是无话不说。",
    "我怀念的，是一起做梦。",
    "我怀念的，是无言感动。",
    "我怀念的，是绝对炽热。",
    // 安宁
    "夜在下雨，天在哭泣。",
    "你的离去，就像刺青。",
    "我忽然非常想念你。",
    // 需要你
    "那天晚上，望着海洋。",
    "都明明需要你，却还犹豫不定。",
    // 当冬夜渐暖
    "当月色的纯白变得阴暗。",
    "当回忆老去的痕迹斑斑。",
    // 时光小偷
    "时光像小偷拿走眼泪。",
    "我的故事，因此写到一半。",
    // 180 度
    "我的脚步加速，能否追回那场当初？",
    // 愚人的国度
    "爱是愚人的国度。",
    "我穿过一地荒芜。",
    // Kepler
    "挂在天上放光明，反射我的孤寂。",
    // 尚好的青春
    "尚好的青春都是你，没有片刻不想你。",
    "就算给你的爱，石沉大海。",
    "青春飞逝就再，找不回来。",
    // 风衣
    "一张一张飞过的日历，拼凑剪贴一件风衣。",
    "一个一个告别的身影，拼凑剪贴一件黑色风衣。",
    "像候鸟飞去，留下一个北极。",
    "陪着我像影子，像姓名。",
    // 日落
    "尽管被夜取代，不表示光不存在。",
    "尽管不再倚赖，不表示爱不存在。",
    // add more...
  ];
  
  function getRandomLyric() {
    const randomIndex = Math.floor(Math.random() * customLyrics.length);
    return customLyrics[randomIndex];
  }
  
  function updateLyric() {
    const lyricElement = document.getElementById('jinrishici-sentence');
    if (lyricElement) {
      lyricElement.textContent = getRandomLyric();
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    updateLyric();
  });