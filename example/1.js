var scene = new pasy.Scene(document.body);
scene.distance(3);

var ps = scene.particleSet();

ps
	.pointSize(2, 5)
	.count(100000)
	.color([.8, .4, .1])
	.attribute("position", 3, function(gl, count) {
		return pasy.randomSet(count, vec3, 0.05);
	})
	.vertex("vec3 position = a_position;");

scene.add(ps);
