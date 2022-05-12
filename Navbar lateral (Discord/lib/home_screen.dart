import 'package:discord_nav_bar/discord_theme.dart';
import 'package:discord_nav_bar/server_navigation_rail.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  var _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        ServerNavigationRail(
          items: _serverItems,
          selectedIndex: _selectedIndex,
          onChanged: (index) => setState(() => _selectedIndex = index),
        ),
        Expanded(
          child: Scaffold(
            backgroundColor: DiscordTheme.background3,
            body: Center(
              child: Text(
                'Page $_selectedIndex',
                style: TextStyle(color: DiscordTheme.white),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

final _serverItems = [
  ServerItem(
    name: 'Cool Folks Only',
    imageUrl: 'assets/images/server1.jpg',
    muted: true,
  ),
  ServerItem(
    name: 'Rive',
    imageUrl: 'assets/images/server2.jpg',
    muted: true,
  ),
  ServerItem(
    name: 'Flare',
    imageUrl: 'assets/images/server2.jpg',
    muted: false,
  ),
  ServerItem(
    name: 'Animal Crossing',
    hasNotification: true,
  ),
];
