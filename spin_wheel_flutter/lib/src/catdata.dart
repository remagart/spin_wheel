class CatData {
  final List _data = [
    {
      'name': '阿比西尼亞貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/100px-Gustav_chocolate.jpg',
    },
    {
      'name': '愛琴海貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Aegean_cat.jpg/100px-Aegean_cat.jpg',
    },
    {
      'name': '澳大利亞霧貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Australian_Mist.jpg/100px-Australian_Mist.jpg',
    },
    {
      'name': '美國多趾貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Polydactylcat.jpg/100px-Polydactylcat.jpg',
    },
    {
      'name': '美國短尾貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/TICO_%288%29.jpg/100px-TICO_%288%29.jpg',
    },
    {
      'name': '美國反耳貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/American_curl_2.jpg/100px-American_curl_2.jpg',
    },
    {
      'name': '美國短毛貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/100px-American_Shorthair.jpg',
    },
    {
      'name': '美國硬毛貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG/100px-American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG',
    },
    {
      'name': '亞洲貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BrownVarientAsianCat.JPG/100px-BrownVarientAsianCat.JPG',
    },
    {
      'name': '亞洲半長毛貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/100px-Tiffanie_at_cat_show.jpg',
    },
    {
      'name': '峇里貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Oskar.jpg/100px-Oskar.jpg',
    },
    {'name': '巴比諾貓', 'url': 'https://s.zimedia.com.tw/s/CjhG56-1'},
    {
      'name': '孟加拉貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/BengalCat_Stella.jpg/100px-BengalCat_Stella.jpg',
    },
    {
      'name': '伯曼貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Birman2.jpg/100px-Birman2.jpg',
    },
    {
      'name': '孟買貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bombay_cat.jpg/100px-Bombay_cat.jpg',
    },
    {
      'name': '巴西短毛貓',
      'url':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gato_pelo_curto_brasileiro.JPG/100px-Gato_pelo_curto_brasileiro.JPG',
    },
  ];

  String getName(idx) {
    return _data[idx]['name'];
  }

  String getUrl(idx) {
    return _data[idx]['url'];
  }
}
