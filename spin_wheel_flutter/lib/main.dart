import 'package:flutter/material.dart';
import 'src/page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('練習抽抽看'),
          backgroundColor: Colors.green[500],
        ),
        body: const MyPage(),
      ),
    );
  }
}
