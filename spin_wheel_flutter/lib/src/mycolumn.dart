import 'package:flutter/material.dart';
import './myitem.dart';

class MyColumn extends StatelessWidget {
  bool isLeft;
  MyColumn({Key? key, this.isLeft = true}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          MyItem(index: isLeft ? 15 : 5),
          MyItem(index: isLeft ? 14 : 6),
          MyItem(index: isLeft ? 13 : 7),
        ],
      ),
    );
  }
}
