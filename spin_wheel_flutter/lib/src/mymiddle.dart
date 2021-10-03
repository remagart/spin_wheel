import 'package:flutter/material.dart';
import './mycolumn.dart';
import './mycenter.dart';

class MyMiddle extends StatelessWidget {
  const MyMiddle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.only(left: 16, right: 16),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            MyColumn(),
            MyCenter(),
            MyColumn(),
          ],
        ));
  }
}
