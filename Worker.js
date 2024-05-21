dependencies {
    implementation "androidx.work:work-runtime-ktx:2.7.1"
}
package com.example.v2rayng

import android.content.Context
import androidx.work.Worker
import androidx.work.WorkerParameters
import android.util.Log

class V2RayWorker(appContext: Context, workerParams: WorkerParameters):
    Worker(appContext, workerParams) {

    override fun doWork(): Result {
        // Define the task here
        return try {
            val result = performV2RayTask()
            Log.d("V2RayWorker", "Task result: $result")
            Result.success()
        } catch (e: Exception) {
            Log.e("V2RayWorker", "Task failed", e)
            Result.failure()
        }
    }

    private fun performV2RayTask(): String {
        // Perform the V2Ray task, e.g., start the V2Ray service
        // This is just a placeholder. Implement your actual task here.
        return "V2Ray task completed"
    }
}
package com.example.v2rayng

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Schedule the worker
        val v2RayWorkRequest = OneTimeWorkRequestBuilder<V2RayWorker>()
            .build()

        WorkManager.getInstance(this).enqueue(v2RayWorkRequest)
    }
}
