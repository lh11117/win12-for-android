"ui";

importClass(android.content.pm.ActivityInfo);
importClass(android.view.WindowManager);

//横屏
activity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN); //设置成全屏模式
activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE); //强制为横屏


ui.layout(
    <frame>
        <vertical>
            <webview id="webview" h="*" margin="0 0"/>
        </vertical>
    </frame>
);


ui.webview.loadUrl("file://" + files.path("./win12/desktop.html"));
