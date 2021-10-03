import 'package:flutter/material.dart';

class MyItem extends StatelessWidget {
  const MyItem({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double SCREEN_WIDTH = MediaQuery.of(context).size.width;
    final double ONE_WIDTH = (SCREEN_WIDTH - 32) / 5;
    return Container(
      // decoration:
      //     BoxDecoration(border: Border.all(color: Colors.deepOrange, width: 2)),
      child: Image.network(
        'https://s.zimedia.com.tw/s/CjhG56-1',
        width: ONE_WIDTH,
        height: ONE_WIDTH,
        fit: BoxFit.cover,
      ),
    );
  }
}
