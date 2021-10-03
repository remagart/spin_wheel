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
        body: FavoriteWidget(),
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

class FavoriteWidget extends StatefulWidget {
  FavoriteWidget({Key? key}) : super(key: key);

  @override
  _FavoriteWidgetState createState() => _FavoriteWidgetState();
}

class _FavoriteWidgetState extends State<FavoriteWidget> {
  bool _isFavorited = true;
  int _favoriteCount = 41;

  @override
  Widget build(BuildContext context) {
    return Row(mainAxisSize: MainAxisSize.min, children: [
      Container(
        padding: const EdgeInsets.all(0),
        child: IconButton(
          padding: const EdgeInsets.all(0),
          alignment: Alignment.centerRight,
          icon: (_isFavorited
              ? const Icon(Icons.star)
              : const Icon(Icons.star_border)),
          onPressed: _toggleFavorite,
        ),
      ),
      SizedBox(
        width: 20,
        child: Text('$_favoriteCount'),
      )
    ]);
  }

  void _toggleFavorite() {
    setState(() {
      if (_isFavorited) {
        _favoriteCount -= 1;
        _isFavorited = false;
      } else {
        _favoriteCount += 1;
        _isFavorited = true;
      }
    });
  }
}
