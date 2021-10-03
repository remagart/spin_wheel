import 'package:flutter/material.dart';
import './myitem.dart';

class MyRowLine extends StatelessWidget {
  const MyRowLine({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          MyItem(),
          MyItem(),
          MyItem(),
          MyItem(),
          MyItem(),
        ],
      ),
    );
  }
}
