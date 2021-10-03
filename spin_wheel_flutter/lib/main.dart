import 'package:flutter/material.dart';

void main() {
  runApp(const myDataPractice());
}

class myDataPractice extends StatelessWidget {
  const myDataPractice({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('practice data change'),
        ),
        body: const Content(),
      ),
    );
  }
}

class Content extends StatelessWidget {
  const Content({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        children: const [Text('data')],
      ),
    );
  }
}
