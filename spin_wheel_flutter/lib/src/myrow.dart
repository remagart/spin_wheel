import 'package:flutter/material.dart';
import './myitem.dart';

class MyRowLine extends StatelessWidget {
  bool isFirst;
  MyRowLine({Key? key, this.isFirst = true}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          MyItem(index: (isFirst) ? 0 : 12),
          MyItem(index: (isFirst) ? 1 : 11),
          MyItem(index: (isFirst) ? 2 : 10),
          MyItem(index: (isFirst) ? 3 : 9),
          MyItem(index: (isFirst) ? 4 : 8),
        ],
      ),
    );
  }
}
