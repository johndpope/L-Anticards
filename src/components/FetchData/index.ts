export { avatarUrl, teamMember, teamInfo };

function padLeft(text: string, padChar: string, size: number): string {
  return (String(padChar).repeat(size) + text).substr((size * -1), size);
}

function avatarUrl(idolID: number): string {
  return './image/mini/' + padLeft(idolID.toString(), '0', 4) + '.jpg'
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
