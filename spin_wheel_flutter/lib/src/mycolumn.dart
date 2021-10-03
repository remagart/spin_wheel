import 'package:flutter/material.dart';
import './myitem.dart';

class MyColumn extends StatelessWidget {
  const MyColumn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          MyItem(),
          MyItem(),
          MyItem(),
        ],
      ),
    );
  }
}
