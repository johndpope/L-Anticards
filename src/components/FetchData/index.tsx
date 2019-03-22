import * as React from 'react';

export { avatarUrl, teamMember, teamInfo, idolData };

function padLeft(text: string, padChar: string, size: number): string {
  return (String(padChar).repeat(size) + text).substr((size * -1), size);
}

function avatarUrl(idolID: number): string {
  return './mini_image/' + padLeft(idolID.toString(), '0', 3) + '.jpg'
}

const teamMember = Array(1, 2, 3, 4, 5);

const teamInfo = [
  {
    'id': 17,
    'boom_id': 25,
    'name': '【天然色ピクニック】櫻木真乃',
    'status': {
      'vo': 163,
      'da': 163,
      'vi': 147,
    }
  },
  {
    'id': 18,
    'boom_id': 26,
    'name': '【克服の特訓】風野灯織',
    'status': {
      'vo': 163,
      'da': 147,
      'vi': 163,
    }
  },
];

const idolData = [
  {
    'id': 17,
    'boom_id': 25,
    'name': '【天然色ピクニック】櫻木真乃',
    'rarity': 'SR',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 50,
        'da': 50,
        'vi': 50,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 138,
        'da': 138,
        'vi': 124,
        'mental': 100
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3,
        'vo': 163,
        'da': 163,
        'vi': 147,
        'mental': 118
      },
      '70': {
        'star': 4,
        'vo': 172,
        'da': 172,
        'vi': 155,
        'mental': 125
      }
    },
    'events': [
      {
        'name': '公園と約束',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'おそろいの気持ち',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ふたりの好きなもの',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 18,
    'boom_id': 26,
    'name': '【克服の特訓】風野灯織',
    'rarity': 'SR',
    'idol': '風野灯織',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 50,
        'da': 50,
        'vi': 50,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 138,
        'da': 124,
        'vi': 138,
        'mental': 100
      },
      '55': {
        'star': 1,
        'vo': 146,
        'da': 131,
        'vi': 146,
        'mental': 106
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3,
        'vo': 163,
        'da': 147,
        'vi': 163,
        'mental': 118
      },
      '70': {
        'star': 4,
        'vo': 172,
        'da': 155,
        'vi': 172,
        'mental': 125
      }
    },
    'events': [
      {
        'name': '困難だって超えられる',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'めぐるのダンス教室',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'にぎやかな日常',
        'vo': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 19,
    'boom_id': 27,
    'name': '【友情の花吹雪】八宮めぐる',
    'rarity': 'SR',
    'idol': '八宮めぐる',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 50,
        'da': 55,
        'vi': 55,
        'mental': 40
      },
      '50': {
        'star': 0,
        'vo': 124,
        'da': 138,
        'vi': 138,
        'mental': 100
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 139,
        'da': 155,
        'vi': 155,
        'mental': 112
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4,
        'vo': 155,
        'da': 172,
        'vi': 172,
        'mental': 125
      }
    },
    'events': [
      {
        'name': 'お友達になる方法',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '似た者同士と花吹雪',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '春風フレンドシップ',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 20,
    'boom_id': 17,
    'name': '【ふっふ〜ん、ふふ〜ん♪】月岡恋鐘',
    'rarity': 'SSR',
    'idol': '月岡恋鐘',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 72,
        'da': 48,
        'vi': 48,
        'mental': 72
      },
      '60': {
        'star': 0,
        'vo': 180,
        'da': 120,
        'vi': 120,
        'mental': 180
      },
      '65': {
        'star': 1,
        'vo': 191,
        'da': 127,
        'vi': 127,
        'mental': 191
      },
      '70': {
        'star': 2,
        'vo': 202,
        'da': 135,
        'vi': 135,
        'mental': 202
      },
      '75': {
        'star': 3,
        'vo': 213,
        'da': 142,
        'vi': 142,
        'mental': 213
      },
      '80': {
        'star': 4,
        'vo': 225,
        'da': 150,
        'vi': 150,
        'mental': 225
      }
    },
    'events': [
      {
        'name': '仲良きことは',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '原宿系のアンティーカ',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'みんなで遊びに行きたか！',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'レッツカラオケ',
        'vo': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 21,
    'boom_id': 18,
    'name': '【指先の煌めき】白瀬咲耶',
    'rarity': 'SSR',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 48,
        'vi': 72,
        'mental': 72
      },
      '60': {
        'star': 0,
        'vo': 120,
        'da': 120,
        'vi': 180,
        'mental': 180
      },
      '65': {
        'star': 1,
        'vo': 127,
        'da': 127,
        'vi': 191,
        'mental': 191
      },
      '70': {
        'star': 2,
        'vo': 135,
        'da': 135,
        'vi': 202,
        'mental': 202
      },
      '75': {
        'star': 3,
        'vo': 142,
        'da': 142,
        'vi': 213,
        'mental': 213
      },
      '80': {
        'star': 4,
        'vo': 150,
        'da': 150,
        'vi': 225,
        'mental': 225
      }
    },
    'events': [
      {
        'name': '鮮やかなる指先',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '小さな色どり',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '欠けない思い出',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '表現の方法',
        'vo': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 22,
    'boom_id': 19,
    'name': '【等身大のレイニーデイ】三峰結華',
    'rarity': 'SSR',
    'idol': '三峰結華',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 72,
        'vi': 48,
        'mental': 72
      },
      '60': {
        'star': 0,
        'vo': 120,
        'da': 180,
        'vi': 120,
        'mental': 180
      },
      '65': {
        'star': 1,
        'vo': 127,
        'da': 191,
        'vi': 127,
        'mental': 191
      },
      '70': {
        'star': 2,
        'vo': 135,
        'da': 202,
        'vi': 135,
        'mental': 202
      },
      '75': {
        'star': 3,
        'vo': 142,
        'da': 213,
        'vi': 142,
        'mental': 213
      },
      '80': {
        'star': 4,
        'vo': 150,
        'da': 225,
        'vi': 150,
        'mental': 225
      }
    },
    'events': [
      {
        'name': '気づいてくれてありがと、なんて',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'そう言ってくれるなら',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'それはきっと',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '私の大切な……',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 23,
    'boom_id': 20,
    'name': '【ヒーローインザパーク】小宮果穂',
    'rarity': 'SSR',
    'idol': '小宮果穂',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 60,
        'da': 60,
        'vi': 60,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 150,
        'da': 150,
        'vi': 150,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 159,
        'da': 159,
        'vi': 159,
        'mental': 159
      },
      '70': {
        'star': 2,
        'vo': 168,
        'da': 168,
        'vi': 169,
        'mental': 169
      },
      '75': {
        'star': 3,
        'vo': 177,
        'da': 177,
        'vi': 178,
        'mental': 178
      },
      '80': {
        'star': 4,
        'vo': 187,
        'da': 187,
        'vi': 188,
        'mental': 188
      }
    },
    'events': [
      {
        'name': 'ヒーローはかっこいい！',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '正義は勝つ',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '果穂はヒーロー！',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '放課後クライマックスレンジャー',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 24,
    'boom_id': 21,
    'name': '【ふれんど日和】杜野凛世',
    'rarity': 'SSR',
    'idol': '杜野凛世',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 48,
        'vi': 96,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 120,
        'da': 120,
        'vi': 240,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 127,
        'da': 127,
        'vi': 255,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 135,
        'da': 135,
        'vi': 270,
        'mental': 135
      },
      '75': {
        'star': 3,
        'vo': 142,
        'da': 142,
        'vi': 285,
        'mental': 142
      },
      '80': {
        'star': 4,
        'vo': 150,
        'da': 150,
        'vi': 300,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '初体験',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'すきなのは？',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '初めまして',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '大切なもの',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 25,
    'boom_id': 22,
    'name': '【熱血指導！】有栖川夏葉',
    'rarity': 'SSR',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 96,
        'vi': 48,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 120,
        'da': 240,
        'vi': 120,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 127,
        'da': 255,
        'vi': 127,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 135,
        'da': 270,
        'vi': 135,
        'mental': 135
      },
      '75': {
        'star': 3,
        'vo': 142,
        'da': 285,
        'vi': 142,
        'mental': 142
      },
      '80': {
        'star': 4,
        'vo': 150,
        'da': 300,
        'vi': 150,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '専属トレーナー誕生！？',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'スパルタトレーニング',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'みんなで運動！',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '現れる成果',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 26,
    'boom_id': 23,
    'name': '【彩りファッションドール】大崎甜花',
    'rarity': 'SSR',
    'idol': '大崎甜花',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 72,
        'da': 48,
        'vi': 72,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 180,
        'da': 120,
        'vi': 180,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 191,
        'da': 127,
        'vi': 191,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 202,
        'da': 135,
        'vi': 202,
        'mental': 135
      },
      '75': {
        'star': 3,
        'vo': 213,
        'da': 142,
        'vi': 213,
        'mental': 142
      },
      '80': {
        'star': 4,
        'vo': 225,
        'da': 150,
        'vi': 225,
        'mental': 150
      }
    },
    'events': [
      {
        'name': 'ファッショナブルチャレンジ',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '試着室ファッションショー',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ほっと一息、甜花の気持ち',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '甜花的ビフォーアフター',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 27,
    'boom_id': 24,
    'name': '【先生のお時間】桑山千雪',
    'rarity': 'SSR',
    'idol': '桑山千雪',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 65,
        'da': 55,
        'vi': 55,
        'mental': 65
      },
      '60': {
        'star': 0,
        'vo': 162,
        'da': 138,
        'vi': 138,
        'mental': 162
      },
      '65': {
        'star': 1,
        'vo': 172,
        'da': 146,
        'vi': 146,
        'mental': 172
      },
      '70': {
        'star': 2,
        'vo': 182,
        'da': 155,
        'vi': 155,
        'mental': 182
      },
      '75': {
        'star': 3,
        'vo': 192,
        'da': 163,
        'vi': 163,
        'mental': 192
      },
      '80': {
        'star': 4,
        'vo': 203,
        'da': 172,
        'vi': 172,
        'mental': 203
      }
    },
    'events': [
      {
        'name': '千雪におまかせ♪',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '材料を買いましょう♪',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '世界にひとつだけ♪',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '三匹のクマさん♪',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 28,
    'boom_id': 28,
    'name': '【カラフルポップMIX】田中摩美々',
    'rarity': 'SR',
    'idol': '田中摩美々',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 80,
        'da': 40,
        'vi': 40,
        'mental': 40
      },
      '50': {
        'star': 0,
        'vo': 200,
        'da': 100,
        'vi': 100,
        'mental': 100
      },
      '55': {
        'star': 1,
        'vo': 212,
        'da': 106,
        'vi': 106,
        'mental': 106
      },
      '60': {
        'star': 2,
        'vo': 225,
        'da': 112,
        'vi': 112,
        'mental': 112
      },
      '65': {
        'star': 3,
        'vo': 237,
        'da': 118,
        'vi': 118,
        'mental': 118
      },
      '70': {
        'star': 4,
        'vo': 250,
        'da': 125,
        'vi': 125,
        'mental': 125
      }
    },
    'events': [
      {
        'name': 'コーディネート・チャンス',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'カラフル・ドール',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ライク・ユー',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 29,
    'boom_id': 29,
    'name': '【綿毛ノ想】幽谷霧子',
    'rarity': 'SR',
    'idol': '幽谷霧子',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 45,
        'vi': 55,
        'mental': 55
      },
      '50': {
        'star': 0,
        'vo': 112,
        'da': 112,
        'vi': 138,
        'mental': 138
      },
      '55': {
        'star': 1,
        'vo': 119,
        'da': 119,
        'vi': 146,
        'mental': 146
      },
      '60': {
        'star': 2,
        'vo': 126,
        'da': 126,
        'vi': 155,
        'mental': 155
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4,
        'vo': 140,
        'da': 140,
        'vi': 172,
        'mental': 172
      }
    },
    'events': [
      {
        'name': '寄り道',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '憧れ',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '霧子の魔法',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 30,
    'boom_id': 30,
    'name': '【迷走チョコロード】園田智代子',
    'rarity': 'SR',
    'idol': '園田智代子',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 60,
        'da': 60,
        'vi': 40,
        'mental': 40
      },
      '50': {
        'star': 0,
        'vo': 150,
        'da': 150,
        'vi': 100,
        'mental': 100
      },
      '55': {
        'star': 1,
        'vo': 159,
        'da': 159,
        'vi': 106,
        'mental': 106
      },
      '60': {
        'star': 2,
        'vo': 168,
        'da': 168,
        'vi': 112,
        'mental': 112
      },
      '65': {
        'star': 3,
        'vo': 177,
        'da': 177,
        'vi': 118,
        'mental': 118
      },
      '70': {
        'star': 4,
        'vo': 187,
        'da': 187,
        'vi': 125,
        'mental': 125
      }
    },
    'events': [
      {
        'name': '普通の女子高生？',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '待ってるだけじゃダメ',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '私について',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 31,
    'boom_id': 31,
    'name': '【意地っ張りサンセット】西城樹里',
    'rarity': 'SR',
    'idol': '西城樹里',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 55,
        'vi': 45,
        'mental': 55
      },
      '50': {
        'star': 0,
        'vo': 112,
        'da': 138,
        'vi': 112,
        'mental': 138
      },
      '55': {
        'star': 1,
        'vo': 119,
        'da': 146,
        'vi': 119,
        'mental': 146
      },
      '60': {
        'star': 2,
        'vo': 126,
        'da': 155,
        'vi': 126,
        'mental': 155
      },
      '65': {
        'star': 3,
        'vo': 133,
        'da': 163,
        'vi': 133,
        'mental': 163
      },
      '70': {
        'star': 4,
        'vo': 140,
        'da': 172,
        'vi': 140,
        'mental': 172
      }
    },
    'events': [
      {
        'name': 'ふたりのサンセット',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '意地っ張りyou&me',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '横一列・たどり着いた先の景色',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 32,
    'boom_id': 32,
    'name': '【秘密の頑張り】大崎甘奈',
    'rarity': 'SR',
    'idol': '大崎甘奈',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 60,
        'vi': 60,
        'mental': 40
      },
      '50': {
        'star': 0,
        'vo': 100,
        'da': 150,
        'vi': 150,
        'mental': 100
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 112,
        'da': 168,
        'vi': 168,
        'mental': 112
      },
      '65': {
        'star': 3,
        'vo': 118,
        'da': 177,
        'vi': 177,
        'mental': 118
      },
      '70': {
        'star': 4,
        'vo': 125,
        'da': 187,
        'vi': 187,
        'mental': 125
      }
    },
    'events': [
      {
        'name': '姉妹の自主レッスン',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'Sleeping Face',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'Step by step',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 50,
    'boom_id': 53,
    'name': '【283プロのヒナ】櫻木真乃',
    'rarity': 'R',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 45,
        'vi': 40,
        'mental': 32
      },
      '40': {
        'star': 0,
        'vo': 112,
        'da': 112,
        'vi': 100,
        'mental': 80
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 140,
        'da': 140,
        'vi': 125,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '私たち次第',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '誰のこと？',
        'da': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 51,
    'boom_id': 54,
    'name': '【283プロのヒナ】風野灯織',
    'rarity': 'R',
    'idol': '風野灯織',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 40,
        'vi': 45,
        'mental': 32
      },
      '40': {
        'star': 0,
        'vo': 112,
        'da': 100,
        'vi': 112,
        'mental': 80
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 140,
        'da': 125,
        'vi': 140,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '真乃と過ごす休日',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'もっと仲良くなりたいっ',
        'da': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 52,
    'boom_id': 55,
    'name': '【283プロのヒナ】八宮めぐる',
    'rarity': 'R',
    'idol': '八宮めぐる',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 45,
        'vi': 45,
        'mental': 32
      },
      '40': {
        'star': 0,
        'vo': 100,
        'da': 112,
        'vi': 112,
        'mental': 80
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 125,
        'da': 140,
        'vi': 140,
        'mental': 100
      }
    },
    'events': [
      {
        'name': 'ピーちゃんともお友達',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '押してダメなら引いてみろ！',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 53,
    'boom_id': 56,
    'name': '【283プロのヒナ】月岡恋鐘',
    'rarity': 'R',
    'idol': '月岡恋鐘',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 32,
        'vi': 50,
        'mental': 48
      },
      '40': {
        'star': 0,
        'vo': 120,
        'da': 80,
        'vi': 80,
        'mental': 124
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 150,
        'da': 100,
        'vi': 100,
        'mental': 155
      }
    },
    'events': [
      {
        'name': 'おしゃべりの架け橋',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '天才ガール、騙される？',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 54,
    'boom_id': 59,
    'name': '【283プロのヒナ】田中摩美々',
    'rarity': 'R',
    'idol': '田中摩美々',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 66,
        'da': 32,
        'vi': 32,
        'mental': 32
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 205,
        'da': 100,
        'vi': 100,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '調子が悪い、わけじゃないケド',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '料理教室、嫌じゃないケド',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 55,
    'boom_id': 60,
    'name': '【283プロのヒナ】白瀬咲耶',
    'rarity': 'R',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 32,
        'da': 32,
        'vi': 50,
        'mental': 45
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 100,
        'da': 100,
        'vi': 155,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '麗しの咲耶お嬢様',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'トップモデルに大切なこと',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 56,
    'boom_id': 58,
    'name': '【283プロのヒナ】三峰結華',
    'rarity': 'R',
    'idol': '三峰結華',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 32,
        'da': 50,
        'vi': 32,
        'mental': 48
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 100,
        'da': 155,
        'vi': 100,
        'mental': 150
      }
    },
    'events': [
      {
        'name': 'こころ重なる',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '見える世界が変わったら……？',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 57,
    'boom_id': 57,
    'name': '【283プロのヒナ】幽谷霧子',
    'rarity': 'R',
    'idol': '幽谷霧子',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 36,
        'da': 36,
        'vi': 45,
        'mental': 45
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 112,
        'da': 112,
        'vi': 140,
        'mental': 140
      }
    },
    'events': [
      {
        'name': 'バンソウコウ・マジック',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'BBAOAB',
        'vo': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 58,
    'boom_id': 64,
    'name': '【283プロのヒナ】小宮果穂',
    'rarity': 'R',
    'idol': '小宮果穂',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 40,
        'vi': 42,
        'mental': 40
      },
      '40': {
        'star': 0,
        'vo': 100,
        'da': 100,
        'vi': 104,
        'mental': 100
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 125,
        'da': 125,
        'vi': 130,
        'mental': 125
      }
    },
    'events': [
      {
        'name': 'それぞれのスゴさ',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'チームメイトと好敵手',
        'da': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 59,
    'boom_id': 65,
    'name': '【283プロのヒナ】園田智代子',
    'rarity': 'R',
    'idol': '園田智代子',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 50,
        'da': 48,
        'vi': 32,
        'mental': 32
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 155,
        'da': 150,
        'vi': 100,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '大人の？ヘア事情！',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '放課後！？マジックタイム！',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 60,
    'boom_id': 66,
    'name': '【283プロのヒナ】西城樹里',
    'rarity': 'R',
    'idol': '西城樹里',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 36,
        'da': 45,
        'vi': 36,
        'mental': 45
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 112,
        'da': 140,
        'vi': 112,
        'mental': 140
      }
    },
    'events': [
      {
        'name': 'ビタースイート・レッスンタイム',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '隣にあるもの',
        'vo': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 61,
    'boom_id': 67,
    'name': '【283プロのヒナ】杜野凛世',
    'rarity': 'R',
    'idol': '杜野凛世',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 32,
        'da': 32,
        'vi': 66,
        'mental': 32
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 100,
        'da': 100,
        'vi': 205,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '恋愛いろは',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '恋ぞつもりて',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 62,
    'boom_id': 68,
    'name': '【283プロのヒナ】有栖川夏葉',
    'rarity': 'R',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 32,
        'da': 66,
        'vi': 32,
        'mental': 32
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 100,
        'da': 205,
        'vi': 100,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '普段のお嬢様',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '履けないヒール',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 63,
    'boom_id': 61,
    'name': '【283プロのヒナ】大崎甘奈',
    'rarity': 'R',
    'idol': '大崎甘奈',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 32,
        'da': 50,
        'vi': 48,
        'mental': 32
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 100,
        'da': 155,
        'vi': 150,
        'mental': 100
      }
    },
    'events': [
      {
        'name': 'スウィート・シスター',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'キュート・フレンズ',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 64,
    'boom_id': 63,
    'name': '【283プロのヒナ】大崎甜花',
    'rarity': 'R',
    'idol': '大崎甜花',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 32,
        'vi': 50,
        'mental': 32
      },
      '40': {
        'star': 0,
        'vo': 120,
        'da': 80,
        'vi': 124,
        'mental': 80
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 150,
        'da': 100,
        'vi': 155,
        'mental': 100
      }
    },
    'events': [
      {
        'name': '広がる世界',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '幸せのための小さな努力',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 65,
    'boom_id': 62,
    'name': '【283プロのヒナ】桑山千雪',
    'rarity': 'R',
    'idol': '桑山千雪',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 36,
        'vi': 36,
        'mental': 45
      },
      '40': {
        'star': 0
      },
      '45': {
        'star': 1
      },
      '50': {
        'star': 2
      },
      '55': {
        'star': 3
      },
      '60': {
        'star': 4,
        'vo': 140,
        'da': 112,
        'vi': 112,
        'mental': 140
      }
    },
    'events': [
      {
        'name': 'スウィート・スリーピー',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'スウィート・スマイリー',
        'vi': 20,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 66,
    'boom_id': -1,
    'name': '【アイドルのたまご】田中摩美々',
    'rarity': 'R',
    'idol': '田中摩美々',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'Unknown',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 32,
        'da': 16,
        'vi': 24,
        'mental': 24
      },
      '10': {
        'star': 0,
        'vo': 80,
        'da': 40,
        'vi': 60,
        'mental': 60
      }
    },
    'events': []
  },
  {
    'id': 67,
    'boom_id': -1,
    'name': '【アイドルのたまご】白瀬咲耶',
    'rarity': 'R',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'Unknown',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 16,
        'da': 24,
        'vi': 32,
        'mental': 24
      },
      '10': {
        'star': 0,
        'vo': 40,
        'da': 60,
        'vi': 80,
        'mental': 60
      }
    },
    'events': []
  },
  {
    'id': 68,
    'boom_id': -1,
    'name': '【アイドルのたまご】有栖川夏葉',
    'rarity': 'R',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'Unknown',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 16,
        'da': 32,
        'vi': 24,
        'mental': 24
      },
      '10': {
        'star': 0,
        'vo': 40,
        'da': 80,
        'vi': 60,
        'mental': 60
      }
    },
    'events': []
  },
  {
    'id': 69,
    'boom_id': -1,
    'name': '【アイドルのたまご】大崎甜花',
    'rarity': 'R',
    'idol': '大崎甜花',
    'avail': {
      'date': '2018/04/24',
      'source_detail': 'Unknown',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 24,
        'da': 24,
        'vi': 24,
        'mental': 24
      },
      '10': {
        'star': 0,
        'vo': 60,
        'da': 60,
        'vi': 60,
        'mental': 60
      }
    },
    'events': []
  },
  {
    'id': 71,
    'boom_id': 35,
    'name': '【トリプルイルミネーション】櫻木真乃',
    'rarity': 'SSR',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/04/26',
      'source_detail': '【イベント】Light up the illumination',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 64,
        'da': 56,
        'vi': 60,
        'mental': 44
      },
      '60': {
        'star': 0,
        'vo': 160,
        'da': 140,
        'vi': 150,
        'mental': 110
      },
      '65': {
        'star': 1,
        'vo': 170,
        'da': 148,
        'vi': 159,
        'mental': 117
      },
      '70': {
        'star': 2,
        'vo': 180,
        'da': 157,
        'vi': 168,
        'mental': 124
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 200,
        'da': 175,
        'vi': 187,
        'mental': 138
      }
    },
    'events': [
      {
        'name': '始まりのステップ',
        'da': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '特訓の成果',
        'da': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '輝き始めた3人',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '3人で、手をつないで',
        'vo': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 72,
    'boom_id': 36,
    'name': '【友達という灯り】八宮めぐる',
    'rarity': 'SR',
    'idol': '八宮めぐる',
    'avail': {
      'date': '2018/04/26',
      'source_detail': '【イベント】Light up the illumination',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 56,
        'vi': 50,
        'mental': 35
      },
      '50': {
        'star': 0,
        'vo': 112,
        'da': 140,
        'vi': 124,
        'mental': 88
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 126,
        'da': 157,
        'vi': 139,
        'mental': 99
      },
      '65': {
        'star': 3,
        'vo': 133,
        'da': 166,
        'vi': 147,
        'mental': 104
      },
      '70': {
        'star': 4,
        'vo': 140,
        'da': 175,
        'vi': 155,
        'mental': 110
      }
    },
    'events': [
      {
        'name': 'きみのためなら',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '大好きの隣',
        'da': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'お互い、素直な心で',
        'da': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 75,
    'boom_id': 87,
    'name': '【街角フラワーガーデン】白瀬咲耶',
    'rarity': 'SSR',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2018/04/30',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 70,
        'da': 50,
        'vi': 60,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 175,
        'da': 124,
        'vi': 150,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 185,
        'da': 131,
        'vi': 159,
        'mental': 159
      },
      '70': {
        'star': 2,
        'vo': 196,
        'da': 139,
        'vi': 168,
        'mental': 168
      },
      '75': {
        'star': 3,
        'vo': 207,
        'da': 147,
        'vi': 177,
        'mental': 177
      },
      '80': {
        'star': 4,
        'vo': 218,
        'da': 155,
        'vi': 187,
        'mental': 187
      }
    },
    'events': [
      {
        'name': '花を飾るキミと',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'キミのために選ぶ花',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'キミの心が曇らぬように',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'キミのためにこの花を',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 76,
    'boom_id': 88,
    'name': '【ゴシックデコレーション】田中摩美々',
    'rarity': 'SSR',
    'idol': '田中摩美々',
    'avail': {
      'date': '2018/05/04',
      'source_detail': '【イベント】廻る歯車、運命の瞬間',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 64,
        'da': 55,
        'vi': 50,
        'mental': 55
      },
      '60': {
        'star': 0,
        'vo': 160,
        'da': 138,
        'vi': 124,
        'mental': 138
      },
      '65': {
        'star': 1
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3,
        'vo': 190,
        'da': 163,
        'vi': 147,
        'mental': 163
      },
      '80': {
        'star': 4,
        'vo': 200,
        'da': 172,
        'vi': 155,
        'mental': 172
      }
    },
    'events': [
      {
        'name': 'シンフォニック・フィルム',
        'vo': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'A PIECE OF……',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '差し伸べられた、その手には。',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'DECORATION',
        'vi': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 77,
    'boom_id': 89,
    'name': '【輪になって】三峰結華',
    'rarity': 'SR',
    'idol': '三峰結華',
    'avail': {
      'date': '2018/05/04',
      'source_detail': '【イベント】廻る歯車、運命の瞬間',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 56,
        'da': 40,
        'vi': 35,
        'mental': 55
      },
      '50': {
        'star': 0,
        'vo': 140,
        'da': 100,
        'vi': 88,
        'mental': 138
      },
      '55': {
        'star': 1,
        'vo': 148,
        'da': 106,
        'vi': 93,
        'mental': 146
      },
      '60': {
        'star': 2,
        'vo': 157,
        'da': 112,
        'vi': 99,
        'mental': 155
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4,
        'vo': 175,
        'da': 125,
        'vi': 110,
        'mental': 172
      }
    },
    'events': [
      {
        'name': '私だって知らなかったのに',
        'vo': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '今はまだ見えないふりだけど',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '見ていてくれるなら',
        'da': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 78,
    'boom_id': 90,
    'name': '【スタァライトショウタイム】八宮めぐる',
    'rarity': 'SSR',
    'idol': '八宮めぐる',
    'avail': {
      'date': '2018/05/10',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 60,
        'da': 66,
        'vi': 66,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 150,
        'da': 165,
        'vi': 165,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 159,
        'da': 175,
        'vi': 175,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 169,
        'da': 185,
        'vi': 185,
        'mental': 135
      },
      '75': {
        'star': 3,
        'vo': 178,
        'da': 195,
        'vi': 195,
        'mental': 142
      },
      '80': {
        'star': 4,
        'vo': 188,
        'da': 206,
        'vi': 206,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '空想トリップ',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '憧憬プランニング',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '星空ステージ',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '夢想スターダム',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 80,
    'boom_id': 92,
    'name': '【身支度はお任せ☆】大崎甜花',
    'rarity': 'SSR',
    'idol': '大崎甜花',
    'avail': {
      'date': '2018/05/21',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 62,
        'da': 62,
        'vi': 68,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 155,
        'da': 155,
        'vi': 170,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 164,
        'da': 164,
        'vi': 180,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 174,
        'da': 174,
        'vi': 195,
        'mental': 135
      },
      '75': {
        'star': 3,
        'vo': 184,
        'da': 184,
        'vi': 201,
        'mental': 142
      },
      '80': {
        'star': 4,
        'vo': 194,
        'da': 194,
        'vi': 212,
        'mental': 150
      }
    },
    'events': [
      {
        'name': 'まどろみの昼下がり',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'メイクアップはお任せで',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '不器用な努力',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '『お疲れ様』',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 82,
    'boom_id': 94,
    'name': '【アーリー・ナチュラリィ】田中摩美々',
    'rarity': 'SR',
    'idol': '田中摩美々',
    'avail': {
      'date': '2018/05/21',
      'source_detail': '【イベント】スプリングフェスティバル',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 40,
        'vi': 66,
        'mental': 40
      },
      '50': {
        'star': 0,
        'vo': 100,
        'da': 100,
        'vi': 165,
        'mental': 100
      },
      '55': {
        'star': 1,
        'vo': 106,
        'da': 106,
        'vi': 175,
        'mental': 106
      },
      '60': {
        'star': 2,
        'vo': 112,
        'da': 112,
        'vi': 185,
        'mental': 112
      },
      '65': {
        'star': 3,
        'vo': 118,
        'da': 118,
        'vi': 195,
        'mental': 118
      },
      '70': {
        'star': 4,
        'vo': 125,
        'da': 125,
        'vi': 206,
        'mental': 125
      }
    },
    'events': [
      {
        'name': 'Morning call',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'Coffee cherry',
        'da': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'And bitterness',
        'vi': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 83,
    'boom_id': 95,
    'name': '【ブルーミングハート】桑山千雪',
    'rarity': 'SR',
    'idol': '桑山千雪',
    'avail': {
      'date': '2018/05/21',
      'source_detail': '【イベント】スプリングフェスティバル',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 53,
        'da': 42,
        'vi': 42,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 132,
        'da': 104,
        'vi': 104,
        'mental': 124
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 148,
        'da': 117,
        'vi': 117,
        'mental': 139
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4,
        'vo': 165,
        'da': 130,
        'vi': 130,
        'mental': 155
      }
    },
    'events': [
      {
        'name': 'アイ・ハブ・ア・フィーリング',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ア・ラヴリー・デイ',
        'vo': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'イン・ブルーム',
        'vi': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 86,
    'boom_id': 98,
    'name': '【放課後★肝試しパニック】園田智代子',
    'rarity': 'SSR',
    'idol': '園田智代子',
    'avail': {
      'date': '2018/05/31',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 56,
        'da': 56,
        'vi': 70,
        'mental': 58
      },
      '60': {
        'star': 0,
        'vo': 140,
        'da': 140,
        'vi': 175,
        'mental': 145
      },
      '65': {
        'star': 1,
        'vo': 148,
        'da': 148,
        'vi': 185,
        'mental': 154
      },
      '70': {
        'star': 2,
        'vo': 157,
        'da': 157,
        'vi': 196,
        'mental': 163
      },
      '75': {
        'star': 3,
        'vo': 166,
        'da': 166,
        'vi': 207,
        'mental': 172
      },
      '80': {
        'star': 4,
        'vo': 175,
        'da': 175,
        'vi': 218,
        'mental': 182
      }
    },
    'events': [
      {
        'name': '恐怖は心を縮めるらしい',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '肝試し・延長戦',
        'vo': 10,
        'vi': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '暗がり事務所で大冒険？',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'その幽霊さんは大切な友達です',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 87,
    'boom_id': 99,
    'name': '【遊びも本気で】有栖川夏葉',
    'rarity': 'SSR',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2018/05/31',
      'source_detail': '【イベント】五色爆発！合宿クライマックス！',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 60,
        'da': 58,
        'vi': 50,
        'mental': 56
      },
      '60': {
        'star': 0,
        'vo': 150,
        'da': 145,
        'vi': 124,
        'mental': 140
      },
      '65': {
        'star': 1
      },
      '70': {
        'star': 2,
        'vo': 168,
        'da': 163,
        'vi': 139,
        'mental': 157
      },
      '75': {
        'star': 3,
        'vo': 177,
        'da': 172,
        'vi': 147,
        'mental': 166
      },
      '80': {
        'star': 4,
        'vo': 187,
        'da': 182,
        'vi': 155,
        'mental': 175
      }
    },
    'events': [
      {
        'name': '楽しみな合宿',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '新鮮な学校体験',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '負けられない戦い',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '挑戦あるのみ',
        'da': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 88,
    'boom_id': 100,
    'name': '【百色ふぉとぐらふ】杜野凛世',
    'rarity': 'SR',
    'idol': '杜野凛世',
    'avail': {
      'date': '2018/05/31',
      'source_detail': '【イベント】五色爆発！合宿クライマックス！',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 54,
        'vi': 40,
        'mental': 52
      },
      '50': {
        'star': 0,
        'vo': 100,
        'da': 135,
        'vi': 100,
        'mental': 130
      },
      '55': {
        'star': 0,
        'vo': 106,
        'da': 143,
        'vi': 106,
        'mental': 138
      },
      '60': {
        'star': 0,
        'vo': 112,
        'da': 151,
        'vi': 112,
        'mental': 146
      },
      '65': {
        'star': 0,
        'vo': 118,
        'da': 159,
        'vi': 118,
        'mental': 154
      },
      '70': {
        'star': 0,
        'vo': 125,
        'da': 168,
        'vi': 125,
        'mental': 162
      }
    },
    'events': [
      {
        'name': '夜もすがら',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'あさぼらけ',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '夕さりて',
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 90,
    'boom_id': 102,
    'name': '【桜餅マスター……？】園田智代子',
    'rarity': 'SSR',
    'idol': '園田智代子',
    'avail': {
      'date': '2018/06/20',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 56,
        'da': 70,
        'vi': 56,
        'mental': 58
      },
      '60': {
        'star': 0,
        'vo': 140,
        'da': 175,
        'vi': 140,
        'mental': 145
      },
      '65': {
        'star': 1,
        'vo': 148,
        'da': 185,
        'vi': 148,
        'mental': 154
      },
      '70': {
        'star': 2,
        'vo': 157,
        'da': 196,
        'vi': 157,
        'mental': 163
      },
      '75': {
        'star': 3,
        'vo': 166,
        'da': 207,
        'vi': 166,
        'mental': 172
      },
      '80': {
        'star': 4,
        'vo': 175,
        'da': 218,
        'vi': 175,
        'mental': 182
      }
    },
    'events': [
      {
        'name': '花より団子、桜より餅',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '桜色ショッピング',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'チョコは万能……？',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'お花見の代わりに',
        'vi': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 92,
    'boom_id': 104,
    'name': '【雲間のモーメント】白瀬咲耶',
    'rarity': 'SR',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2018/06/20',
      'source_detail': '【イベント】サマーフェスティバル',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 62,
        'da': 36,
        'vi': 44,
        'mental': 44
      },
      '50': {
        'star': 0,
        'vo': 155,
        'da': 90,
        'vi': 110,
        'mental': 110
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 174,
        'da': 101,
        'vi': 124,
        'mental': 124
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4,
        'vo': 194,
        'da': 112,
        'vi': 138,
        'mental': 138
      }
    },
    'events': [
      {
        'name': '雨の中に、見えるもの',
        'vi': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ふたりきりの、傘の中',
        'vo': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '雨やんで、浮かぶ彩',
        'vo': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 95,
    'boom_id': 107,
    'name': '【お揃いスナップ】櫻木真乃',
    'rarity': 'SSR',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/06/30',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 66,
        'da': 66,
        'vi': 60,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 165,
        'da': 165,
        'vi': 150,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 175,
        'da': 175,
        'vi': 159,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 185,
        'da': 185,
        'vi': 169,
        'mental': 135
      },
      '75': {
        'star': 3,
        'vo': 195,
        'da': 195,
        'vi': 178,
        'mental': 142
      },
      '80': {
        'star': 4,
        'vo': 206,
        'da': 206,
        'vi': 188,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '夏と言えば……',
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'サマータイム！',
        'vo': 20,
        'da': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '色褪せないもの',
        'vo': 30,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 96,
    'boom_id': 108,
    'name': '【幸せのりんご飴】大崎甘奈',
    'rarity': 'SSR',
    'idol': '大崎甘奈',
    'avail': {
      'date': '2018/06/30',
      'source_detail': '【イベント】満開、アルストロメリア流幸福論ーつなぐ・まごころ・みっつー',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 53,
        'da': 60,
        'vi': 53,
        'mental': 58
      },
      '60': {
        'star': 0,
        'vo': 132,
        'da': 150,
        'vi': 132,
        'mental': 145
      },
      '65': {
        'star': 1,
        'vo': 140,
        'da': 159,
        'vi': 140,
        'mental': 154
      },
      '70': {
        'star': 2,
        'vo': 148,
        'da': 168,
        'vi': 148,
        'mental': 163
      },
      '75': {
        'star': 3,
        'vo': 156,
        'da': 177,
        'vi': 156,
        'mental': 172
      },
      '80': {
        'star': 4,
        'vo': 165,
        'da': 187,
        'vi': 165,
        'mental': 182
      }
    },
    'events': [
      {
        'name': 'どこがいいかな☆',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '仲良しの『いただきます』',
        'vo': 20,
        'mental': 5,
        'sp': 15
      },
      {
        'name': 'それぞれの関係',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 97,
    'boom_id': 109,
    'name': '【アイ・セーブ・ユー】大崎甜花',
    'rarity': 'SR',
    'idol': '大崎甜花',
    'avail': {
      'date': '2018/06/30',
      'source_detail': '【イベント】満開、アルストロメリア流幸福論ーつなぐ・まごころ・みっつー',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 50,
        'da': 45,
        'vi': 56,
        'mental': 35
      },
      '50': {
        'star': 0,
        'vo': 124,
        'da': 112,
        'vi': 140,
        'mental': 88
      },
      '55': {
        'star': 1,
        'vo': 131,
        'da': 119,
        'vi': 148,
        'mental': 93
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4
      }
    },
    'events': [
      {
        'name': 'SHOT！',
        'vo': 10,
        'vi': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': '世界にひとつの……',
        'vo': 15,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 100,
    'boom_id': 112,
    'name': '【娘・娘・金・魚】幽谷霧子',
    'rarity': 'SR',
    'idol': '幽谷霧子',
    'avail': {
      'date': '2018/07/20',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 50,
        'vi': 60,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 100,
        'da': 125,
        'vi': 150,
        'mental': 125
      },
      '55': {
        'star': 1,
        'vo': 106,
        'da': 132,
        'vi': 159,
        'mental': 132
      },
      '60': {
        'star': 2,
        'vo': 112,
        'da': 140,
        'vi': 169,
        'mental': 140
      },
      '65': {
        'star': 3,
        'vo': 118,
        'da': 148,
        'vi': 178,
        'mental': 148
      },
      '70': {
        'star': 4,
        'vo': 125,
        'da': 156,
        'vi': 188,
        'mental': 156
      }
    },
    'events': [
      {
        'name': 'ゆらゆら',
        'da': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'な・つ・お・わ・ら・な・い',
        'da': 10,
        'vi': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 102,
    'boom_id': 114,
    'name': '【スプラッシュビート】櫻木真乃',
    'rarity': 'SSR',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/07/31',
      'source_detail': 'サマーキャンペーン',
      'source': 'CP'
    },
    'status': {
      '1': {
        'vo': 56,
        'da': 64,
        'vi': 60,
        'mental': 44
      },
      '60': {
        'star': 0,
        'vo': 140,
        'da': 160,
        'vi': 150,
        'mental': 110
      },
      '65': {
        'star': 1
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 175,
        'da': 200,
        'vi': 187,
        'mental': 138
      }
    },
    'events': [
      {
        'name': 'プールインサイド',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ほんの少しのアドベンチャー',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': 'ハッピーアイスクリーム',
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 105,
    'boom_id': 117,
    'name': '【未知なるFROZEN】西城樹里',
    'rarity': 'SSR',
    'idol': '西城樹里',
    'avail': {
      'date': '2018/07/31',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 70,
        'da': 55,
        'vi': 55,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 175,
        'da': 138,
        'vi': 138,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 185,
        'da': 146,
        'vi': 146,
        'mental': 159
      },
      '70': {
        'star': 2,
        'vo': 196,
        'da': 155,
        'vi': 155,
        'mental': 169
      },
      '75': {
        'star': 3,
        'vo': 207,
        'da': 163,
        'vi': 163,
        'mental': 178
      },
      '80': {
        'star': 4,
        'vo': 218,
        'da': 172,
        'vi': 172,
        'mental': 188
      }
    },
    'events': [
      {
        'name': 'フローズン・ヒート！',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'だってあの雲は',
        'vo': 10,
        'da': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'どしゃ降り・サマーガールズ',
        'vo': 30,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 106,
    'boom_id': 118,
    'name': '【鉄板★絶品★海の家】小宮果穂',
    'rarity': 'SSR',
    'idol': '小宮果穂',
    'avail': {
      'date': '2018/07/31',
      'source_detail': '【イベント】夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 53,
        'da': 53,
        'vi': 62,
        'mental': 56
      },
      '60': {
        'star': 0,
        'vo': 132,
        'da': 132,
        'vi': 155,
        'mental': 140
      },
      '65': {
        'star': 1,
        'vo': 140,
        'da': 140,
        'vi': 164,
        'mental': 148
      },
      '70': {
        'star': 2,
        'vo': 148,
        'da': 148,
        'vi': 174,
        'mental': 157
      },
      '75': {
        'star': 3,
        'vo': 156,
        'da': 156,
        'vi': 184,
        'mental': 166
      },
      '80': {
        'star': 4,
        'vo': 165,
        'da': 165,
        'vi': 194,
        'mental': 175
      }
    },
    'events': [
      {
        'name': 'あたしたちの海の家',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '出撃！クライマックス号',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '拝啓、12ヶ月後のあたしたち',
        'vi': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 107,
    'boom_id': 119,
    'name': '【光の想い出】大崎甘奈',
    'rarity': 'SR',
    'idol': '大崎甘奈',
    'avail': {
      'date': '2018/07/31',
      'source_detail': '【イベント】夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 54,
        'da': 40,
        'vi': 40,
        'mental': 52
      },
      '50': {
        'star': 0,
        'vo': 135,
        'da': 100,
        'vi': 100,
        'mental': 130
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 151,
        'da': 112,
        'vi': 112,
        'mental': 146
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4
      }
    },
    'events': [
      {
        'name': '『いらっしゃいませ☆』',
        'vo': 15,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'Summer panic!',
        'vo': 15,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 109,
    'boom_id': 121,
    'name': '【遊び疲れて…】風野灯織',
    'rarity': 'SR',
    'idol': '風野灯織',
    'avail': {
      'date': '2018/08/10',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 60,
        'da': 48,
        'vi': 54,
        'mental': 38
      },
      '50': {
        'star': 0,
        'vo': 150,
        'da': 120,
        'vi': 135,
        'mental': 95
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3,
        'vo': 177,
        'da': 142,
        'vi': 159,
        'mental': 112
      },
      '70': {
        'star': 4,
        'vo': 187,
        'da': 150,
        'vi': 168,
        'mental': 118
      }
    },
    'events': [
      {
        'name': '精一杯楽しむために',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '忍耐と結果と',
        'da': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ひと時のおやすみ',
        'vo': 20,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 111,
    'boom_id': 123,
    'name': '【メロウビート・スローダウン】三峰結華',
    'rarity': 'SR',
    'idol': '三峰結華',
    'avail': {
      'date': '2018/08/20',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 72,
        'vi': 40,
        'mental': 48
      },
      '50': {
        'star': 0,
        'vo': 100,
        'da': 180,
        'vi': 100,
        'mental': 120
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 112,
        'da': 202,
        'vi': 112,
        'mental': 135
      },
      '65': {
        'star': 3,
        'vo': 118,
        'da': 213,
        'vi': 118,
        'mental': 142
      },
      '70': {
        'star': 4,
        'vo': 125,
        'da': 225,
        'vi': 125,
        'mental': 150
      }
    },
    'events': [
      {
        'name': 'イタズラ心も流されて',
        'vo': 10,
        'da': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '緩めてくれたとわかったから',
        'da': 10,
        'vi': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 114,
    'boom_id': 126,
    'name': '【みんなで結んだもの】風野灯織',
    'rarity': 'SSR',
    'idol': '風野灯織',
    'avail': {
      'date': '2018/08/31',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 66,
        'da': 60,
        'vi': 66,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 165,
        'da': 150,
        'vi': 165,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 175,
        'da': 159,
        'vi': 175,
        'mental': 127
      },
      '70': {
        'star': 2,
        'vo': 185,
        'da': 169,
        'vi': 185,
        'mental': 135
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 206,
        'da': 188,
        'vi': 206,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '不安と安心と',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '幸運の彩りを繋いで',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'お返しには甘さを添えて',
        'vi': 30,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 116,
    'boom_id': 128,
    'name': '【虹待ちレインドロップ】有栖川夏葉',
    'rarity': 'SR',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2018/09/20',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 50,
        'vi': 55,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 112,
        'da': 115,
        'vi': 138,
        'mental': 125
      },
      '55': {
        'star': 1,
        'vo': 119,
        'da': 132,
        'vi': 146,
        'mental': 132
      },
      '60': {
        'star': 2,
        'vo': 126,
        'da': 140,
        'vi': 155,
        'mental': 140
      },
      '65': {
        'star': 3,
        'vo': 133,
        'da': 148,
        'vi': 163,
        'mental': 148
      },
      '70': {
        'star': 4,
        'vo': 140,
        'da': 156,
        'vi': 172,
        'mental': 156
      }
    },
    'events': [
      {
        'name': '「そんなこと気にすんのかよ」',
        'da': 10,
        'vi': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '「そんなこと気にするの？」',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 120,
    'boom_id': 132,
    'name': '【霧・霧・奇・譚】幽谷霧子',
    'rarity': 'SSR',
    'idol': '幽谷霧子',
    'avail': {
      'date': '2018/09/30',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 72,
        'da': 52,
        'vi': 52,
        'mental': 64
      },
      '60': {
        'star': 0,
        'vo': 180,
        'da': 130,
        'vi': 130,
        'mental': 160
      },
      '65': {
        'star': 1,
        'vo': 191,
        'da': 138,
        'vi': 138,
        'mental': 170
      },
      '70': {
        'star': 2,
        'vo': 202,
        'da': 146,
        'vi': 146,
        'mental': 180
      },
      '75': {
        'star': 3,
        'vo': 213,
        'da': 154,
        'vi': 154,
        'mental': 190
      },
      '80': {
        'star': 4,
        'vo': 225,
        'da': 162,
        'vi': 162,
        'mental': 200
      }
    },
    'events': [
      {
        'name': '霧',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '綺',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '戯',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '帰',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 121,
    'boom_id': 133,
    'name': '【キャプテン★パンプキン】八宮めぐる',
    'rarity': 'SSR',
    'idol': '八宮めぐる',
    'avail': {
      'date': '2018/09/30',
      'source_detail': '【イベント】真夜中発、ハロウィンワールドの旅人',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 56,
        'da': 64,
        'vi': 54,
        'mental': 50
      },
      '60': {
        'star': 0,
        'vo': 140,
        'da': 160,
        'vi': 135,
        'mental': 124
      },
      '65': {
        'star': 1
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4
      }
    },
    'events': [
      {
        'name': 'Whisper, Whisper',
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '(...hug you)',
        'da': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'Hallowed world',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 122,
    'boom_id': 134,
    'name': '【マジカル＊スカイレース】白瀬咲耶',
    'rarity': 'SR',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2018/09/30',
      'source_detail': '【イベント】真夜中発、ハロウィンワールドの旅人',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 62,
        'vi': 40,
        'mental': 44
      },
      '50': {
        'star': 0
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 112,
        'da': 174,
        'vi': 112,
        'mental': 124
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4
      }
    },
    'events': [
      {
        'name': 'ア・ホール・アナザーワールド',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'デイズ・イン・ザ・ルナ',
        'da': 15,
        'vi': 10,
        'mental': 5,
        'sp': 10
      }
    ]
  },
  {
    'id': 124,
    'boom_id': 136,
    'name': '【これ、なんの話～？】月岡恋鐘',
    'rarity': 'SSR',
    'idol': '月岡恋鐘',
    'avail': {
      'date': '2018/10/10',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 70,
        'da': 55,
        'vi': 55,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 175,
        'da': 138,
        'vi': 138,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 185,
        'da': 146,
        'vi': 146,
        'mental': 159
      },
      '70': {
        'star': 2,
        'vo': 196,
        'da': 155,
        'vi': 155,
        'mental': 169
      },
      '75': {
        'star': 3,
        'vo': 207,
        'da': 163,
        'vi': 163,
        'mental': 178
      },
      '80': {
        'star': 4,
        'vo': 218,
        'da': 172,
        'vi': 172,
        'mental': 188
      }
    },
    'events': [
      {
        'name': '罪ば～い',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '咲耶と～♥',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'カットもば～りばり',
        'vo': 30,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 126,
    'boom_id': 138,
    'name': '【魔法の階段を上って……】風野灯織',
    'rarity': 'SR',
    'idol': '風野灯織',
    'avail': {
      'date': '2018/10/19',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 48,
        'da': 60,
        'vi': 54,
        'mental': 38
      },
      '50': {
        'star': 0,
        'vo': 120,
        'da': 150,
        'vi': 135,
        'mental': 95
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2,
        'vo': 135,
        'da': 168,
        'vi': 151,
        'mental': 106
      },
      '65': {
        'star': 3,
        'vo': 142,
        'da': 177,
        'vi': 159,
        'mental': 112
      },
      '70': {
        'star': 4,
        'vo': 150,
        'da': 187,
        'vi': 168,
        'mental': 118
      }
    },
    'events': [
      {
        'name': '夢見る少女のように',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '鐘が鳴るその時までは……',
        'da': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 129,
    'boom_id': 141,
    'name': '【まだ……寝ないから……】大崎甘奈',
    'rarity': 'SSR',
    'idol': '大崎甘奈',
    'avail': {
      'date': '2018/10/31',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 56,
        'da': 68,
        'vi': 56,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 140,
        'da': 170,
        'vi': 140,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 148,
        'da': 180,
        'vi': 148,
        'mental': 159
      },
      '70': {
        'star': 2,
        'vo': 157,
        'da': 191,
        'vi': 157,
        'mental': 169
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 175,
        'da': 212,
        'vi': 175,
        'mental': 188
      }
    },
    'events': [
      {
        'name': '今から楽しみだねっ☆',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'めっちゃ満喫しちゃお！',
        'da': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '夜更かしするんだからっ',
        'da': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 131,
    'boom_id': 143,
    'name': '【＃ナッツ・チョコジェリー】有栖川夏葉',
    'rarity': 'SSR',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2018/11/09',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 55,
        'da': 55,
        'vi': 70,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 138,
        'da': 138,
        'vi': 175,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 146,
        'da': 146,
        'vi': 185,
        'mental': 159
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 172,
        'da': 172,
        'vi': 218,
        'mental': 188
      }
    },
    'events': [
      {
        'name': '#followme',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '☆☆☆ メゾンドナツハ',
        'da': 10,
        'vi': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '￥10 やくそく',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 133,
    'boom_id': 145,
    'name': '【3名様極楽旅行記】西城樹里',
    'rarity': 'SR',
    'idol': '西城樹里',
    'avail': {
      'date': '2018/11/19',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 55,
        'da': 50,
        'vi': 45,
        'mental': 50
      },
      '50': {
        'star': 0
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4,
        'vo': 172,
        'da': 156,
        'vi': 140,
        'mental': 156
      }
    },
    'events': [
      {
        'name': '幸福、それは湯煙に巻かれて……',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'ありったけの土産に気持ち込めて',
        'vo': 20,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 137,
    'boom_id': 149,
    'name': '【闇鍋上等】田中摩美々',
    'rarity': 'SSR',
    'idol': '田中摩美々',
    'avail': {
      'date': '2018/11/30',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 55,
        'da': 55,
        'vi': 72,
        'mental': 58
      },
      '60': {
        'star': 0,
        'vo': 138,
        'da': 138,
        'vi': 180,
        'mental': 145
      },
      '65': {
        'star': 1,
        'vo': 146,
        'da': 146,
        'vi': 191,
        'mental': 154
      },
      '70': {
        'star': 2,
        'vo': 155,
        'da': 155,
        'vi': 202,
        'mental': 163
      },
      '75': {
        'star': 3,
        'vo': 163,
        'da': 163,
        'vi': 213,
        'mental': 172
      },
      '80': {
        'star': 4,
        'vo': 172,
        'da': 172,
        'vi': 225,
        'mental': 181
      }
    },
    'events': [
      {
        'name': 'マシ マシ',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'まみみおきない',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'いざ、尋常に闇鍋',
        'vi': 30,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 139,
    'boom_id': 151,
    'name': '【冬街イルミネート】櫻木真乃',
    'rarity': 'SSR',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/12/14',
      'source_detail': 'ウィンターキャンペーン',
      'source': 'CP'
    },
    'status': {
      '1': {
        'vo': 60,
        'da': 56,
        'vi': 64,
        'mental': 44
      },
      '60': {
        'star': 0,
        'vo': 150,
        'da': 140,
        'vi': 160,
        'mental': 110
      },
      '65': {
        'star': 1,
        'vo': 159,
        'da': 148,
        'vi': 170,
        'mental': 117
      },
      '70': {
        'star': 2,
        'vo': 168,
        'da': 157,
        'vi': 180,
        'mental': 124
      },
      '75': {
        'star': 3,
        'vo': 177,
        'da': 166,
        'vi': 190,
        'mental': 131
      },
      '80': {
        'star': 4,
        'vo': 187,
        'da': 175,
        'vi': 200,
        'mental': 138
      }
    },
    'events': [
      {
        'name': '冬のとおり道',
        'vi': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '一緒に行けたなら',
        'da': 10,
        'vi': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': 'きっと、何よりも輝いて',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 141,
    'boom_id': 153,
    'name': '【永遠のCarol】桑山千雪',
    'rarity': 'SSR',
    'idol': '桑山千雪',
    'avail': {
      'date': '2018/12/14',
      'source_detail': '【限定ガシャ】Holy Merry Present！ 樹里・千雪ガシャ',
      'source': '限定'
    },
    'status': {
      '1': {
        'vo': 54,
        'da': 72,
        'vi': 54,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 135,
        'da': 180,
        'vi': 135,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 143,
        'da': 191,
        'vi': 143,
        'mental': 159
      },
      '70': {
        'star': 2,
        'vo': 152,
        'da': 202,
        'vi': 152,
        'mental': 168
      },
      '75': {
        'star': 3,
        'vo': 159,
        'da': 211,
        'vi': 159,
        'mental': 175
      },
      '80': {
        'star': 4,
        'vo': 170,
        'da': 225,
        'vi': 170,
        'mental': 187
      }
    },
    'events': [
      {
        'name': 'あの木の下でキャンディ',
        'da': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'よくばりでいいの',
        'vo': 10,
        'da': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '特別をあげたい',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 142,
    'boom_id': 154,
    'name': '【はじまりのエピローグ】櫻木真乃',
    'rarity': 'SSR',
    'idol': '櫻木真乃',
    'avail': {
      'date': '2018/12/14',
      'source_detail': '【イベント】オペレーション・サンタ！～包囲せよ２８３プロ～',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 68,
        'da': 52,
        'vi': 52,
        'mental': 52
      },
      '60': {
        'star': 0,
        'vo': 170,
        'da': 130,
        'vi': 130,
        'mental': 130
      },
      '65': {
        'star': 1,
        'vo': 180,
        'da': 138,
        'vi': 138,
        'mental': 138
      },
      '70': {
        'star': 2,
        'vo': 191,
        'da': 146,
        'vi': 146,
        'mental': 146
      },
      '75': {
        'star': 3,
        'vo': 201,
        'da': 154,
        'vi': 154,
        'mental': 154
      },
      '80': {
        'star': 4,
        'vo': 212,
        'da': 162,
        'vi': 162,
        'mental': 162
      }
    },
    'events': [
      {
        'name': '心はずむパーティーグッズ',
        'vo': 20,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '希望の数字',
        'vo': 10,
        'vi': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': 'ぽかぽかの秘密',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 143,
    'boom_id': 155,
    'name': '【やけん、なんの話～！？】月岡恋鐘',
    'rarity': 'SR',
    'idol': '月岡恋鐘',
    'avail': {
      'date': '2018/12/14',
      'source_detail': '【イベント】オペレーション・サンタ！～包囲せよ２８３プロ～',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 36,
        'da': 36,
        'vi': 62,
        'mental': 52
      },
      '50': {
        'star': 0,
        'vo': 90,
        'da': 90,
        'vi': 155,
        'mental': 130
      },
      '55': {
        'star': 1,
        'vo': 95,
        'da': 95,
        'vi': 164,
        'mental': 138
      },
      '60': {
        'star': 2,
        'vo': 101,
        'da': 101,
        'vi': 174,
        'mental': 146
      },
      '65': {
        'star': 3,
        'vo': 106,
        'da': 106,
        'vi': 184,
        'mental': 154
      },
      '70': {
        'star': 4,
        'vo': 112,
        'da': 112,
        'vi': 194,
        'mental': 162
      }
    },
    'events': [
      {
        'name': 'ミスター♡ほーりーない',
        'da': 10,
        'vi': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'ライツ！ジングル！アクション！',
        'vo': 10,
        'vi': 15,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 146,
    'boom_id': 158,
    'name': '【放課後スノーガールズ！】小宮果穂',
    'rarity': 'SR',
    'idol': '小宮果穂',
    'avail': {
      'date': '2018/12/21',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 70,
        'da': 40,
        'vi': 40,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 175,
        'da': 100,
        'vi': 100,
        'mental': 125
      },
      '55': {
        'star': 1,
        'vo': 185,
        'da': 106,
        'vi': 106,
        'mental': 132
      },
      '60': {
        'star': 2,
        'vo': 196,
        'da': 112,
        'vi': 112,
        'mental': 140
      },
      '65': {
        'star': 3,
        'vo': 207,
        'da': 118,
        'vi': 118,
        'mental': 148
      },
      '70': {
        'star': 4,
        'vo': 218,
        'da': 125,
        'vi': 125,
        'mental': 156
      }
    },
    'events': [
      {
        'name': '雪やこんこ！',
        'vo': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'ビッグでビックリ雪だるま！',
        'vo': 20,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 150,
    'boom_id': 162,
    'name': '【かしまし、みっつの願いごと】大崎甜花',
    'rarity': 'SSR',
    'idol': '大崎甜花',
    'avail': {
      'date': '2019/01/01',
      'source_detail': '【限定ガシャ】きんが新年～ めでたか♡エキゾチック 恋鐘・真乃・甜花ガシャ',
      'source': '限定'
    },
    'status': {
      '1': {
        'vo': 72,
        'da': 54,
        'vi': 54,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 180,
        'da': 135,
        'vi': 135,
        'mental': 150
      },
      '65': {
        'star': 1,
        'vo': 191,
        'da': 143,
        'vi': 143,
        'mental': 159
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3,
        'vo': 213,
        'da': 161,
        'vi': 161,
        'mental': 177
      },
      '80': {
        'star': 4,
        'vo': 225,
        'da': 170,
        'vi': 170,
        'mental': 187
      }
    },
    'events': [
      {
        'name': '重なる願い、３人分。',
        'vo': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '甘い幸せ、３人前',
        'vo': 20,
        'da': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '扇に梅、花車の蝶、重ね熨斗と桜',
        'vo': 10,
        'vi': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 151,
    'boom_id': 163,
    'name': '【娘・娘・謹・賀】幽谷霧子',
    'rarity': 'SSR',
    'idol': '幽谷霧子',
    'avail': {
      'date': '2019/01/01',
      'source_detail': '【イベント】新春！283式かるた大全',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 53,
        'da': 62,
        'vi': 53,
        'mental': 56
      },
      '60': {
        'star': 0,
        'vo': 132,
        'da': 155,
        'vi': 132,
        'mental': 140
      },
      '65': {
        'star': 1,
        'vo': 140,
        'da': 164,
        'vi': 140,
        'mental': 148
      },
      '70': {
        'star': 2,
        'vo': 148,
        'da': 174,
        'vi': 148,
        'mental': 157
      },
      '75': {
        'star': 3,
        'vo': 156,
        'da': 184,
        'vi': 156,
        'mental': 166
      },
      '80': {
        'star': 4,
        'vo': 165,
        'da': 194,
        'vi': 165,
        'mental': 175
      }
    },
    'events': [
      {
        'name': 'いっぱいのかけ蕎麦',
        'da': 10,
        'vi': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '明けまして',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': '三峰結華',
        'da': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 152,
    'boom_id': 164,
    'name': '【紅いろは、白】有栖川夏葉',
    'rarity': 'SR',
    'idol': '有栖川夏葉',
    'avail': {
      'date': '2019/01/01',
      'source_detail': '【イベント】新春！283式かるた大全',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 45,
        'da': 56,
        'vi': 45,
        'mental': 40
      },
      '50': {
        'star': 0,
        'vo': 112,
        'da': 140,
        'vi': 112,
        'mental': 100
      },
      '55': {
        'star': 1
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4
      }
    },
    'events': [
      {
        'name': '熱、夕焼け、君の髪',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '星、吐く息、君のシャツ',
        'vo': 10,
        'da': 15,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 154,
    'boom_id': 166,
    'name': '【ハロー、私の「いつも通り」】三峰結華',
    'rarity': 'SSR',
    'idol': '三峰結華',
    'avail': {
      'date': '2019/01/11',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 52,
        'da': 52,
        'vi': 70,
        'mental': 66
      },
      '60': {
        'star': 0,
        'vo': 130,
        'da': 130,
        'vi': 175,
        'mental': 165
      },
      '65': {
        'star': 1,
        'vo': 138,
        'da': 138,
        'vi': 185,
        'mental': 175
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 162,
        'da': 162,
        'vi': 218,
        'mental': 208
      }
    },
    'events': [
      {
        'name': '即興劇『ケーキ泥棒の末路』',
        'vi': 20,
        'mental': 10,
        'sp': 10
      },
      {
        'name': 'ごっこ遊び『遭難中の山小屋』',
        'vo': 10,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '引っかけ合戦『言っちゃダメ』',
        'vo': 10,
        'vi': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 156,
    'boom_id': 168,
    'name': '【咲耶と摩美々のぶらり旅】白瀬咲耶',
    'rarity': 'SR',
    'idol': '白瀬咲耶',
    'avail': {
      'date': '2019/01/21',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 40,
        'da': 70,
        'vi': 40,
        'mental': 50
      },
      '50': {
        'star': 0,
        'vo': 100,
        'da': 175,
        'vi': 100,
        'mental': 125
      },
      '55': {
        'star': 1,
        'vo': 106,
        'da': 185,
        'vi': 106,
        'mental': 132
      },
      '60': {
        'star': 2,
        'vo': 112,
        'da': 196,
        'vi': 112,
        'mental': 140
      },
      '65': {
        'star': 3,
        'vo': 118,
        'da': 207,
        'vi': 118,
        'mental': 148
      },
      '70': {
        'star': 4,
        'vo': 125,
        'da': 218,
        'vi': 125,
        'mental': 156
      }
    },
    'events': [
      {
        'name': '光のしずくが落ちる場所',
        'da': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'そこは優しくてあたたかい場所',
        'vo': 10,
        'da': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 160,
    'boom_id': 172,
    'name': '【お菓子なティータイム】大崎甘奈',
    'rarity': 'SSR',
    'idol': '大崎甘奈',
    'avail': {
      'date': '2019/01/31',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 68,
        'da': 55,
        'vi': 62,
        'mental': 55
      },
      '60': {
        'star': 0,
        'vo': 170,
        'da': 138,
        'vi': 155,
        'mental': 138
      },
      '65': {
        'star': 1,
        'vo': 180,
        'da': 146,
        'vi': 164,
        'mental': 146
      },
      '70': {
        'star': 2,
        'vo': 191,
        'da': 155,
        'vi': 174,
        'mental': 155
      },
      '75': {
        'star': 3,
        'vo': 201,
        'da': 163,
        'vi': 184,
        'mental': 163
      },
      '80': {
        'star': 4,
        'vo': 212,
        'da': 172,
        'vi': 194,
        'mental': 172
      }
    },
    'events': [
      {
        'name': 'どんなのだろうな～',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '食べちゃいたいっ☆',
        'vo': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'みんなで考えよう！',
        'vo': 20,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 161,
    'boom_id': 173,
    'name': '【風野署長の一日勤務回想録】風野灯織',
    'rarity': 'SSR',
    'idol': '風野灯織',
    'avail': {
      'date': '2019/01/31',
      'source_detail': '【イベント】Catch the shiny tail',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 54,
        'da': 56,
        'vi': 64,
        'mental': 50
      },
      '60': {
        'star': 0,
        'vo': 135,
        'da': 140,
        'vi': 160,
        'mental': 124
      },
      '65': {
        'star': 1
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 170,
        'da': 175,
        'vi': 200,
        'mental': 155
      }
    },
    'events': [
      {
        'name': '取りたい満点',
        'vo': 10,
        'vi': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'Q&A・トレイン',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': 'ミルクティーの体温',
        'vi': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 162,
    'boom_id': 174,
    'name': '【アイムカミングスーン】八宮めぐる',
    'rarity': 'SR',
    'idol': '八宮めぐる',
    'avail': {
      'date': '2019/01/31',
      'source_detail': '【イベント】Catch the shiny tail',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 50,
        'da': 50,
        'vi': 40,
        'mental': 46
      },
      '50': {
        'star': 0,
        'vo': 124,
        'da': 124,
        'vi': 100,
        'mental': 115
      },
      '55': {
        'star': 1,
        'vo': 131,
        'da': 131,
        'vi': 106,
        'mental': 122
      },
      '60': {
        'star': 2,
        'vo': 139,
        'da': 139,
        'vi': 112,
        'mental': 129
      },
      '65': {
        'star': 3,
        'vo': 147,
        'da': 147,
        'vi': 118,
        'mental': 136
      },
      '70': {
        'star': 4
      }
    },
    'events': [
      {
        'name': 'パリッとしたい',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': '次の春を星たちと待つ',
        'vo': 10,
        'da': 10,
        'vi': 5,
        'mental': 10,
        'sp': 10
      }
    ]
  },
  {
    'id': 165,
    'boom_id': 177,
    'name': '【凛世夕町物語】杜野凛世',
    'rarity': 'SSR',
    'idol': '杜野凛世',
    'avail': {
      'date': '2019/02/18',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 96,
        'da': 48,
        'vi': 48,
        'mental': 48
      },
      '60': {
        'star': 0,
        'vo': 240,
        'da': 120,
        'vi': 120,
        'mental': 120
      },
      '65': {
        'star': 1,
        'vo': 255,
        'da': 127,
        'vi': 127,
        'mental': 127
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 300,
        'da': 150,
        'vi': 150,
        'mental': 150
      }
    },
    'events': [
      {
        'name': '凛世夕町物語・上',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '凛世夕町物語・中',
        'vo': 20,
        'da': 10,
        'mental': 10,
        'sp': 15
      },
      {
        'name': '凛世夕町物語・下',
        'vo': 20,
        'da': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 169,
    'boom_id': 181,
    'name': '【夜夜中ワンダーラスト】田中摩美々',
    'rarity': 'SSR',
    'idol': '田中摩美々',
    'avail': {
      'date': '2019/02/28',
      'source_detail': 'プラチナガシャ',
      'source': '恒常'
    },
    'status': {
      '1': {
        'vo': 55,
        'da': 80,
        'vi': 55,
        'mental': 50
      },
      '60': {
        'star': 0,
        'vo': 138,
        'da': 200,
        'vi': 138,
        'mental': 124
      },
      '65': {
        'star': 1,
        'vo': 146,
        'da': 212,
        'vi': 146,
        'mental': 132
      },
      '70': {
        'star': 2,
        'vo': 155,
        'da': 225,
        'vi': 155,
        'mental': 140
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 172,
        'da': 250,
        'vi': 172,
        'mental': 156
      }
    },
    'events': [
      {
        'name': '220時間30分',
        'vo': 10,
        'da': 10,
        'mental': 10,
        'sp': 10
      },
      {
        'name': '君の門にも',
        'vo': 10,
        'da': 20,
        'mental': 10,
        'sp': 15
      },
      {
        'name': 'テイクオフ！',
        'vo': 10,
        'da': 20,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 170,
    'boom_id': 182,
    'name': '【SIDE：K】月岡恋鐘',
    'rarity': 'SSR',
    'idol': '月岡恋鐘',
    'avail': {
      'date': '2019/02/28',
      'source_detail': '【イベント】MAGIA L\'Antica ～アンティーカの5つの魔法～',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 52,
        'da': 52,
        'vi': 60,
        'mental': 60
      },
      '60': {
        'star': 0,
        'vo': 130,
        'da': 130,
        'vi': 150,
        'mental': 150
      },
      '65': {
        'star': 1
      },
      '70': {
        'star': 2
      },
      '75': {
        'star': 3
      },
      '80': {
        'star': 4,
        'vo': 162,
        'da': 162,
        'vi': 187,
        'mental': 187
      }
    },
    'events': [
      {
        'name': 'する！',
        'da': 10,
        'vi': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'setup:オーディオコメンタリー1',
        'vo': 10,
        'vi': 10,
        'mental': 5,
        'sp': 15
      },
      {
        'name': '特典映像：NGシーン集',
        'vo': 10,
        'vi': 10,
        'mental': 10,
        'sp': 15
      }
    ]
  },
  {
    'id': 171,
    'boom_id': 183,
    'name': '【SIDE：Y】三峰結華',
    'rarity': 'SR',
    'idol': '三峰結華',
    'avail': {
      'date': '2019/02/28',
      'source_detail': '【イベント】MAGIA L\'Antica ～アンティーカの5つの魔法～',
      'source': 'ｲﾍﾞﾝﾄ'
    },
    'status': {
      '1': {
        'vo': 35,
        'da': 56,
        'vi': 40,
        'mental': 55
      },
      '50': {
        'star': 0,
        'vo': 88,
        'da': 140,
        'vi': 100,
        'mental': 138
      },
      '55': {
        'star': 1,
        'vo': 93,
        'da': 148,
        'vi': 106,
        'mental': 146
      },
      '60': {
        'star': 2
      },
      '65': {
        'star': 3
      },
      '70': {
        'star': 4
      }
    },
    'events': [
      {
        'name': 'setup:オーディオコメンタリー2',
        'vo': 10,
        'da': 10,
        'mental': 5,
        'sp': 10
      },
      {
        'name': 'かけられちゃったんだ',
        'vo': 5,
        'da': 10,
        'vi': 10,
        'mental': 10,
        'sp': 10
      }
    ]
  }];
