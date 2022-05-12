import 'package:flutter/material.dart';
import 'package:flutter_portal/flutter_portal.dart';
import 'package:google_fonts/google_fonts.dart';

import 'home_screen.dart';

void main() {
  runApp(Discord());
}

class Discord extends StatelessWidget {
  const Discord({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Portal(
      child: MaterialApp(
        theme: ThemeData(textTheme: GoogleFonts.openSansTextTheme()),
        home: HomeScreen(),
      ),
    );
  }
}
