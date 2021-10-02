import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
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
    return Center(
      child: Container(
        alignment: Alignment.topCenter,
        color: Colors.blue[300],
        child: const Text('123'),
        // ignore: prefer_const_constructors
        constraints: BoxConstraints(
            maxWidth: 300, maxHeight: 300, minWidth: 50, minHeight: 50),
        margin: const EdgeInsets.all(50),
        padding: const EdgeInsets.only(left: 50, top: 200),
      ),
    );
  }
}
