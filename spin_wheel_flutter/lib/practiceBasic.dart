import 'package:flutter/material.dart';

class PracticeBasic extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('我的app'),
        ),
        body: HomePage(),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Image.network(
          'https://s.zimedia.com.tw/s/CjhG56-1',
          width: 100,
          height: 50,
        ),
        Container(
          margin: const EdgeInsets.only(top: 16),
          color: Colors.amber[300],
          child: const Text(
            '1\n2\n3\n4',
            style: TextStyle(
                fontSize: 30,
                color: Colors.black12,
                decoration: TextDecoration.lineThrough,
                fontWeight: FontWeight.bold),
            maxLines: 3,
          ),
        ),
        Container(
          margin: const EdgeInsets.only(top: 16),
          // color: Colors.brown[300],
          child: ElevatedButton(
            onPressed: () {
              onClicked(context);
            },
            style: ElevatedButton.styleFrom(
                textStyle: const TextStyle(
                    fontSize: 24, backgroundColor: Colors.yellow)),
            child: const Text(
              'press',
            ),
          ),
        ),
        Image.asset(
          'lib/img/cat.jpeg',
          width: 200,
          height: 100,
        )
      ],
    );
  }

  void onClicked(BuildContext context) {
    print('dd');
    Navigator.push(context,
        MaterialPageRoute(builder: (context) => PageB(testint: 'rrr')));
  }
}

class PageB extends StatelessWidget {
  String testint;
  PageB({Key? key, this.testint = 'asd'}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(testint),
      ),
      body: _PageB(testint: testint),
    );
  }
}

class _PageB extends StatelessWidget {
  String testint;
  _PageB({Key? key, this.testint = 'qqq'}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
            },
            child: const Text('back')),
        Row(
          children: [Text(testint)],
        )
      ],
    );
  }
}
