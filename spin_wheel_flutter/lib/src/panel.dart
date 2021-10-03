import 'package:flutter/material.dart';
import './myrow.dart';
import './mymiddle.dart';

class Panel extends StatelessWidget {
  const Panel({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double screen_width = MediaQuery.of(context).size.width;
    return Container(
      margin: EdgeInsets.only(top: 16, bottom: 16),
      child: Column(
        children: [
          MyRowLine(),
          MyMiddle(),
          MyRowLine(),
        ],
      ),
    );
  }
}
