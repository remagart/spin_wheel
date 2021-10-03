import 'package:flutter/material.dart';
import './catdata.dart';

class MyItem extends StatelessWidget {
  int index;
  MyItem({Key? key, this.index = 0}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double SCREEN_WIDTH = MediaQuery.of(context).size.width;
    final double ONE_WIDTH = (SCREEN_WIDTH - 32) / 5;
    return Container(
        // decoration: (index > 5)
        //     ? BoxDecoration(
        //         border: Border.all(color: Colors.deepOrange, width: 1))
        //     : null,
        child: Stack(
      alignment: Alignment.bottomCenter,
      // clipBehavior: Clip.hardEdge,
      children: [
        Image.network(
          CatData().getUrl(index),
          width: ONE_WIDTH,
          height: ONE_WIDTH,
          fit: BoxFit.cover,
        ),
        Flexible(
            child: Container(
          padding: const EdgeInsets.only(
            left: 4,
            right: 4,
          ),
          margin: const EdgeInsets.only(bottom: 4),
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8), color: Colors.black38),
          child: Text(
            CatData().getName(index),
            style: const TextStyle(color: Colors.white, fontSize: 7),
            overflow: TextOverflow.ellipsis,
          ),
        ))
      ],
    ));
  }
}
