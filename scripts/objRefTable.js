const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.custom,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{ScrollTo: 0},
	{Platform: 0},
	{character: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Background: 0},
	{backgroundd: 0},
	{Solid: 0},
	{platforms: 0},
	{Custom: 0},
	{bear: 0},
	{Direction: 0},
	{bearr: 0},
	{wall: 0},
	{rightt: 0},
	{coin: 0},
	{brickWall: 0},
	{Tree: 0},
	{Score: 0},
	{Stone: 0},
	{trees: 0},
	{waves: 0},
	{Sprite5: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	character: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Background: class extends self.ISpriteInstance {},
	backgroundd: class extends self.ISpriteInstance {},
	platforms: class extends self.ISpriteInstance {},
	bear: class extends self.ISpriteInstance {},
	bearr: class extends self.ISpriteInstance {},
	wall: class extends self.ISpriteInstance {},
	rightt: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	brickWall: class extends self.ISpriteInstance {},
	Tree: class extends self.ISpriteInstance {},
	Score: class extends self.ITextInstance {},
	Stone: class extends self.ISpriteInstance {},
	trees: class extends self.ISpriteInstance {},
	waves: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {}
}